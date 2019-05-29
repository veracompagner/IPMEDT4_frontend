import React from "react";
import {Link} from "react-router-dom";

import "./Login.scss";
import logo from "./img/appLogo.png";

const Register = ({registerUser}) => {

    let email, password, name, password_confirmation;

    /**
     * @func handleRegister
     * @param event
     * Handles form submissions
     **/
    const handleRegister = event => {
        event.preventDefault();
        registerUser(name.value, email.value, password.value, password_confirmation.value);
    };

    return (
        <div id="register">
            <img className="logoImg" src={logo} alt="appLogo"></img>
            <form onSubmit={handleRegister} action="" method="post">
                {/* input username */}
                <input
                    ref={input => (name = input)}
                    name="username"
                    type="text"
                    placeholder="Gebruikersnaam"
                />

                {/* input mail */}
                <input
                    ref={input => (email = input)}
                    name="email"
                    type="text"
                    placeholder="E-mailadres"
                />


                {/* input password */}
                <input
                    ref={input => (password = input)}
                    name="password"
                    type="password"
                    placeholder="Wachtwoord"
                />

                <input
                    ref={input => (password_confirmation = input)}
                    name="password_confirmation"
                    type="password"
                    placeholder="Bevestig Wachtwoord"
                />

                <div className="splitbox">
                    {/*Inlog link*/}
                    <Link to="/">
                        Inloggen
                    </Link>
                    {/* submit button */}
                    <button type="submit">
                        Registreer
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
