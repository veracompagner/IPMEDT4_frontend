// Import React and several components for React-Router and Redux
import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { changeIsLoggedIn, changeUser, changeToken } from "../../redux/actions";

// Import axios for requests
import axios from "axios";

// Import APIURL from constants file
import { APIURL } from "../../constants/constants";

// Import used components
import Login from "./Login";
import Register from "./Register";
import Logout from "./Logout";
import Alert from "../helper/Alert/Alert";

// Import scss
import "./Auth.scss";

// Import logo for authpages
import logo from "../../img/appLogo.png";

// Auth class component
class Auth extends React.Component {
    // Add state for melding and loading
    // (used in errorhandling and loadingicons while waiting for requests)
    constructor(props) {
        super(props);
        this.state = {
            melding: null,
            loading: false
        };
    }

    componentDidMount(){
        document.body.style.background = "#FFC61E";
    }

    // Main function for requesting login and register
    // Accepts the route it needs to take and a formData object containing credentials
    authUser = (route, formData) => {
        // Turn loading icon on
        this.setState({ loading: true });
        // Begin axios request to our given route with formdata
        axios
        .post(APIURL + route, formData)
        .then(json => {
            if (json.data.token) {
                // If a token is found, update user and token in state, turn off our local states and finally log the user in
                // (isLoggedIn triggers update which redirects to the main page)
                this.props.dispatch(changeUser(json.data.user));
                this.props.dispatch(changeToken(json.data.token));
                this.setState({
                    melding: null,
                    loading: false
                });
                this.props.dispatch(changeIsLoggedIn(true));
                // Log if token not present
            } else console.log(route + " failed!");
        })
        .catch(error => {
            // Errorhandling, taking a JSON list and then translating to Dutch
            // Shows most important errors first (email, password,name)

            // First initialize our melding var
            var melding = "";
            console.log(error);
            if(error.response) {
                // Parse errordata
                console.log(error.response);
                var errors;
                // Try to parse the data, if its already an object, return that instead
                try {
                    errors = JSON.parse(error.response.data);
                } catch {
                    errors = error.response.data;
                }

                if( errors['email'] ) {

                    if( errors['email'].includes("The email must be a valid email address.") ) {
                        melding = "Voer een geldig e-mailadres in."
                    } else if( errors['email'].includes("The email has already been taken.") ) {
                        melding = "Dit e-mailadres bestaat al."
                    }

                } else if(errors['password']){

                    if(errors['password'].includes("The password must be at least 6 characters.") ) {
                        melding = "Het wachtwoord moet minimaal 6 karakters lang zijn."
                    } else if( errors['password'].includes("The password confirmation does not match.") ) {
                        melding = "De wachtwoorden komen niet overeen."
                    }

                } else if( errors['name'] ) {
                    if( errors['name'].includes("The name field is required.") ) {
                        melding = "Er moet een gebruikersnaam opgegeven worden."
                    }
                } else if( errors['error'] ) {
                    melding = "De inloggegevens zijn onjuist."
                } else {
                    melding = "Er is iets fout gegaan, check uw gegevens en probeer opnieuw."
                }
            } else {
                melding = "Geen verbinding met de server, probeer het later opnieuw."
            }
            // Place melding in state to be displayed to the user, and disable the loading animation
            this.setState({melding: melding});
            this.setState({loading: false});
        });
    }

    // Function to log in the user, this is passed to the login component in routing below
    // Accepts an email and password as string and combines it into a formData object to be sent to authUser with the login route
    loginUser = (email, password) => {
        var formData = new FormData();
        formData.append("email", email);
        formData.append("password", password);

        this.authUser("/login", formData)
    };

    // Function to register the user, this is passed to the register component in routing below
    // Accepts a name, email, password and confirmation as string and combines it into a formData object to be sent to authUser with the register route
    registerUser = (name, email, password, password_confirmation) => {
        var formData = new FormData();

        formData.append("name", name);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("password_confirmation", password_confirmation);

        this.authUser("/register", formData)
    };
    // Function to log out the user, passed to logout route
    // dispatch the needed changes to empty redux store
    logoutUser = () => {
        this.props.dispatch(changeUser({}));
        this.props.dispatch(changeToken(""));
        this.props.dispatch(changeIsLoggedIn(false));
    };

    render(){
        return(
            <div className="auth">
                {/* Show logo */}
                <img className="auth-logo" src={logo} alt=""></img>
                {/* View errormessage depending on the message in state */}
                <Alert foutmeldingen={this.state.melding}></Alert>
                {/* Switch our authentication routes, every route is passed its corresponding function and loading state */}
                <Switch>
                    <Route path="/auth/login" render={props => <Login {...props} loginUser={this.loginUser} loading={this.state.loading}/>} />
                    <Route path="/auth/register" render={props => <Register {...props} registerUser={this.registerUser} loading={this.state.loading}/>} />
                    <Route path="/auth/logout" render={props => <Logout {...props} logoutUser={this.logoutUser} />} />
                </Switch>
            </div>
        )
    }

}

//connect Auth with redux
export default connect()(Auth);
