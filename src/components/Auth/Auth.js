import React from "react";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import { APIURL } from "../../constants/constants";

import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import { changeIsLoggedIn, changeUser, changeToken } from "../../redux/actions";
import Alert from "./Alert";

import logo from "../../img/appLogo.png";

class Auth extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            melding: null,
            loading: false
        };
    }

    authUser = (route, formData) => {
        this.setState({ loading: true });
        axios
        .post(APIURL + route, formData)
        .then(json => {
            if (json.data.token) {
                this.props.dispatch(changeUser(json.data.user));
                this.props.dispatch(changeToken(json.data.token));
                this.setState({melding: null});
                this.setState({loading: false});
                this.props.dispatch(changeIsLoggedIn(true));
            } else console.log(route + " failed!");
        })
        .catch(error => {
            //Errorhandling, taking a JSON list and then translating to Dutch
            //Shows most important errors first (email, password,name)
            var melding = "";
            console.log(error);
            if(error.response) {
                var errors = error.response.data;
                console.log(error.response);
                if( errors['email'] ) {

                    if( errors['email'].includes("The email must be a valid email address.") ) {
                        melding = "Voer een geldig e-mailadres in."
                    } else

                    if( errors['email'].includes("The email has already been taken.") ) {
                        melding = "Dit e-mailadres bestaat al."
                    }

                } else
                if(errors['password']){

                    if(errors['password'].includes("The password must be at least 6 characters.") ) {
                        melding = "Het wachtwoord moet minimaal 6 karakters lang zijn."
                    } else

                    if( errors['password'].includes("The password confirmation does not match.") ) {
                        melding = "De wachtwoorden komen niet overeen."
                    }

                } else
                if( errors['name'] ) {
                    if( errors['name'].includes("The name field is required.") ) {
                        melding = "Er moet een gebruikersnaam opgegeven worden."
                    }
                } else
                if( errors['error'] ) {
                    melding = "De inloggegevens zijn onjuist."
                } else
                {
                    melding = "Er is iets fout gegaan, check uw gegevens en probeer opnieuw."
                }
            } else {
                melding = "Geen verbinding met de server, probeer het later opnieuw."
            }

            this.setState({melding: melding});
            this.setState({loading: false});
        });
    }

    loginUser = (email, password) => {
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        this.authUser("/login", formData)
    };

    registerUser = (name, email, password, password_confirmation) => {
        var formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("password_confirmation", password_confirmation);

        this.authUser("/register", formData)
    };

    logoutUser = () => {
        this.props.dispatch(changeIsLoggedIn(false));
        this.props.dispatch(changeUser({}));
        this.props.dispatch(changeToken(""));
    };

    render(){
        return(
            <div id="auth">
                <img className="logoImg" src={logo} alt="appLogo"></img>
                <Alert foutmeldingen={this.state.melding}></Alert>
                <Switch>
                    <Route path="/auth/login" render={props => <Login {...props} loginUser={this.loginUser} loading={this.state.loading}/>} />
                    <Route path="/auth/register" render={props => <Register {...props} registerUser={this.registerUser} loading={this.state.loading}/>} />
                    <Route path="/auth/logout" render={props => <Logout {...props} logoutUser={this.logoutUser} />} />
                </Switch>
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
