import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import axios from "axios";

import Login from "./Login";
import Register from "./Register";
import Hoi from "./Hoi";
import Acties from "./Acties";
import Alert from "./Alert";

import "./App.scss";

class App extends React.Component {

    /**
     * @func constructor
     * @param props
     * This function initializes the state for isLoggedIn
     * It shows whether a user has logged in or not
     **/
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {}
        };
        this.apiurl = "http://" + window.location.hostname + ":8000/api";
        this.modalroot = document.getElementById('modal-root');
        // this.apiurl = "http://IPMEDT4_api.test/api"; Meuk voor matthijs
    }

    loginUser = (email, password) => {
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        axios.post(this.apiurl + "/login", formData)
        .then(json => {
            if (json.data.token) {
                let appState = {
                    isLoggedIn: true,
                    user: {
                        id: json.data.user.id,
                        name: json.data.user.name,
                        email: json.data.user.email,
                        auth_token: json.data.token,
                        timestamp: new Date().toString()
                    }
                };
                // save app state with user date in local storage
                localStorage["appState"] = JSON.stringify(appState);
                this.setState({
                    isLoggedIn: appState.isLoggedIn,
                    user: appState.user
                });
            } else console.log("Login Failed!");
        })
        .catch(error => {
            console.log(`An Error Occured! ${error}`);
            console.log(JSON.stringify(error.response.data));
            alert(error.response.data.error)
        });
    };

    registerUser = (name, email, password, password_confirmation) => {
        var formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("password_confirmation", password_confirmation);

        axios.post(this.apiurl + "/register", formData)
            .then(json => {
                if (json.data.token) {
                    let appState = {
                        isLoggedIn: true,
                        user: {
                            id: json.data.user.id,
                            name: json.data.user.name,
                            email: json.data.user.email,
                            auth_token: json.data.token,
                            timestamp: new Date().toString()
                        }
                    };
                    // save app state with user date in local storage
                    localStorage["appState"] = JSON.stringify(appState);
                    this.setState({
                        isLoggedIn: appState.isLoggedIn,
                        user: appState.user
                    });
                } else console.log(`Registration Failed!`);
            }

            )
            .catch(error => {
                //Errorhandling, taking a JSON list and then translating to Dutch
                //Shows most important errors first (email, password,name)
                var registerErrors = JSON.parse(error.response.data);
                var melding = "";
                if(registerErrors['email']){
                    if(registerErrors['email'].includes("The email must be a valid email address.")){
                        melding = "Voer een geldig e-mailadres in."
                    }else if(registerErrors['email'].includes("The email has already been taken.")){
                        melding = "Dit e-mailadres bestaat al."
                    }
                }else if(registerErrors['password']){
                    if(registerErrors['password'].includes("The password must be at least 6 characters.")){
                        melding = "Het wachtwoord moet minimaal 6 karakters lang zijn."
                    }else if(registerErrors['password'].includes("The password confirmation does not match.")){
                        melding = "De wachtwoorden komen niet overeen."
                    }
                }else if(registerErrors['name'].includes("The name field is required.")){
                    melding = "Er moet een gebruikersnaam opgegeven worden."
                }else{
                    melding = "Er is iets fout gegaan met registreren, check uw gegevens en probeer opnieuw."
                }
                ReactDOM.render(<Alert foutmeldingen={melding}></Alert>, document.getElementById('modal-root'));
            });
    };

    logoutUser = () => {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        // save app state with user date in local storage
        localStorage["appState"] = JSON.stringify(appState);
        this.setState(appState);
    };

    componentWillMount = () => {
        let state = localStorage["appState"];
        if (state) {
            let AppState = JSON.parse(state);
            this.setState({
                isLoggedIn: AppState.isLoggedIn,
                user: AppState.user
            });
        }
    };
    render(){
        if (!this.state.isLoggedIn && this.props.location.pathname !== "/login" && this.props.location.pathname !== "/register") {
            return <Redirect to="/login" />;
        }
        if (this.state.isLoggedIn && (this.props.location.pathname === "/login" || this.props.location.pathname === "/register")) {
            return <Redirect to="/" />;
        }
        return(
            <Switch>
                <Route exact path='/' render={props => <Hoi {...props} logoutUser={this.logoutUser} user={this.state.user} apiurl={this.apiurl}/>} />
                <Route path="/login" render={props => <Login {...props} loginUser={this.loginUser} />} />
                <Route path="/register" render={props => <Register {...props} registerUser={this.registerUser} />} />
                <Route path="/acties" component={Acties} />
            </Switch>
        )
    }
}
export default withRouter(App);
