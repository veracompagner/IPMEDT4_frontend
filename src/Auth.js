import React from "react";
import axios from "axios";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

class Auth extends React.Component {
    constructor(props) {
        super(props);
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
            })
            .catch(error => {
                console.log("An Error Occured!" + error);
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
    }

    render(){
        return(
            <Switch>
                <Route path="/auth/login" render={props => <Login {...props} loginUser={this.loginUser} />} />
                <Route path="/auth/register" render={props => <Register {...props} registerUser={this.registerUser} />} />
            </Switch>
        )
    }

}

export default Auth;
