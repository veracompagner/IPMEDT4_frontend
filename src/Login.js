import React from "react";
import "./Form.css";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {}

    render() {
        return (
            <div>

                {/* input username */}
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
                    onClick={this.submitLogin.bind(this)}>Login</button>

            </div>
        );
    }

}

export default Login;
