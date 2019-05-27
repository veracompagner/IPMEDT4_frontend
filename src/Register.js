import React from "react";
import "./Form.css";

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) {}

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

                {/* input mail */}
                <div className="input">
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"/>
                </div>


                {/* input password */}
                <div className="input">
                    <input
                        type="password"
                        name="password"
                        placeholder="Wachtwoord"/>
                </div>

                <div className="input">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Bevestig Wactwoord"/>
                </div>

                {/* submit button */}
                <button
                    type="button"
                    className="loginButton"
                    onClick={this.submitRegister.bind(this)}>Registreer</button>

            </div>
        );
    }
}

export default Register;
