import React from "react";
import {Link} from "react-router-dom";
import "./Form.css";

class Login extends React.Component {
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
                    <Link className="loginRegister loginRegisterActive" to="/">Inloggen</Link>
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
