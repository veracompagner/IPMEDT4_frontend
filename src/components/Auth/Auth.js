import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { APIURL } from "../../constants/constants";

import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import { changeIsLoggedIn, changeUser } from "../../redux/actions";
import Alert from "./Alert";

class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            melding: null
        };
    }

    loginUser = (email, password) => {

        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        axios.post(APIURL + "/login", formData)
        .then(json => {
            if (json.data.token) {
                let appState = {
                    isLoggedIn: true,
                    user: {
                        id: json.data.user.id,
                        name: json.data.user.name,
                        email: json.data.user.email,
                        auth_token: json.data.token,
                        timestamp: new Date().toString(),
                        points: json.data.user.points
                    }
                };
                // save app state with user date in local storage
                localStorage["appState"] = JSON.stringify(appState);
                this.props.dispatch(changeIsLoggedIn(appState.isLoggedIn));
                this.props.dispatch(changeUser(appState.user));
                this.setState({melding: null});
            } else console.log("Login Failed!");
        })
        .catch(error => {
            //Errorhandling, only 1 kind of error possible, so it is a standard
            this.setState({melding: "De inloggegevens zijn onjuist"});
        });
    };

    registerUser = (name, email, password, password_confirmation) => {

        var formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("password_confirmation", password_confirmation);

        axios.post(APIURL + "/register", formData)
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
                    this.props.dispatch(changeIsLoggedIn(appState.isLoggedIn));
                    this.props.dispatch(changeUser(appState.user));
                    this.setState({melding: null});
                } else console.log(`Registration Failed!`);
            })
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
                this.setState({melding: melding});
            });
    };

    logoutUser = () => {
        let appState = {
            isLoggedIn: false,
            user: {}
        };
        // save app state with user date in local storage
        localStorage["appState"] = JSON.stringify(appState);
        this.props.dispatch(changeIsLoggedIn(appState.isLoggedIn));
        this.props.dispatch(changeUser(appState.user));
    };

    componentWillMount = () => {
        let state = localStorage["appState"];
        if (state) {
            let appState = JSON.parse(state);

            this.props.dispatch(changeIsLoggedIn(appState.isLoggedIn));
            this.props.dispatch(changeUser(appState.user));
        }
    }

    render(){
        return(
            <div>
                <Switch>
                    <Route path="/auth/login" render={props => <Login {...props} loginUser={this.loginUser} />} />
                    <Route path="/auth/register" render={props => <Register {...props} registerUser={this.registerUser} />} />
                    <Route path="/auth/logout" render={props => <Logout {...props} logoutUser={this.logoutUser} />} />
                </Switch>
                <Alert foutmeldingen={this.state.melding}></Alert>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.isLoggedIn,
        user: state.user
    }
}

export default connect(mapStateToProps)(Auth);
