import React from "react";
import {BrowserRouter as Router, Route, Redirect, Link} from "react-router-dom";
import "./Form.css";
import Register from "./Register";

class Login extends React.Component {

    /**
     * @func showLogin
     * @func showRegister
     *
     * Two functions to change the states of isLogin and isRegister
     * These are used to hide/show the right divs
     **/

    showLogin() {
        this.setState({isLogin: true, isRegister: false});
    }
    showRegister() {
        this.setState({isRegister: true, isLogin: false});
        return <Register/>;
    }


    /**
     * @func submitLogin
     * @param e the event
     * Submits the form
     **/
    submitLogin(e) {}

    render() {
        return (
            <div>
                <img className="logoImg" src="./img/appLogo.png" alt="appLogo"></img>

                <div className="loginRegisterBox">
                    <button
                        className="loginRegister loginRegisterActive"
                        onClick={this.showLogin.bind(this)}>Login
                    </button>

                    {/*<button*/}
                        {/*className="loginRegister "*/}
                        {/*onClick={<Route path="/Register" exact component={this.showRegister} />}>Account Maken*/}
                    {/*</button>*/}
                    <Link className="loginRegister" to="/register">Account Maken</Link>
                </div>

                {/* input username */}
                <div className="LoginInputStuffs ">
                    <div className="input">
                        <input
                            type="text"
                            name="username"
                            placeholder="Gebruikersnaam"/>
                    </div>

                    {/* input password */}
                    <div className="input">
                        <input
                            type="password"
                            name="password"
                            placeholder="Wachtwoord"/>
                    </div>

                    {/* submit button */}
                    <button
                        type="button"
                        className="loginButton"
                        onClick={this.submitLogin.bind(this)}>Login
                    </button>
                </div>
            </div>
        );
    }

}

export default Login;
