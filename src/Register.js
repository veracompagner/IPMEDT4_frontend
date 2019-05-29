import React from "react";
import "./Form.css";
import {Link} from "react-router-dom";

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

                <div className="RegisterInputStuffs">
                    {/* input username */}
                    <div className="input">
                        <input
                            className="inputbox"
                            type="text"
                            name="username"
                            placeholder="Gebruikersnaam"/>
                    </div>

                    {/* input mail */}
                    <div className="input">
                        <input
                            className="inputbox"
                            type="text"
                            name="email"
                            placeholder="Email"/>
                    </div>


                    {/* input password */}
                    <div className="input">
                        <input
                            className="inputbox"
                            type="password"
                            name="password"
                            placeholder="Wachtwoord"/>
                    </div>

                    <div className="input">
                        <input
                            className="inputbox"
                            type="password"
                            name="confirmPassword"
                            placeholder="Bevestig Wactwoord"/>
                    </div>

                    <div className="splitbox">
                        {/*Link to inloggen*/}
                        <Link className="loginRegister" to="/">Inloggen</Link>
                        {/* submit button */}
                        <button
                            type="button"
                            className="loginButton"
                            onClick={this.submitLogin.bind(this)}>Registreer</button>
                    </div>
                </div>





            </div>
        );
    }

}

export default Login;
