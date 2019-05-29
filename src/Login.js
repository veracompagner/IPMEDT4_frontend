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

                {/* input username */}
                <div className="LoginInputStuffs ">
                    <div className="input">
                        <input
                            className="inputbox"
                            type="text"
                            name="username"
                            placeholder="Gebruikersnaam"/>
                    </div>

                    {/* input password */}
                    <div className="input">
                        <input
                            className="inputbox"
                            type="password"
                            name="password"
                            placeholder="Wachtwoord"/>
                    </div>

                    <div className="splitbox">
                        {/*Register link*/}
                        <Link className="loginRegister" to="/register">Registreren</Link>

                        {/* submit button */}
                        <button
                            type="button"
                            className="loginButton"
                            onClick={this.submitLogin.bind(this)}>Login
                        </button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;
