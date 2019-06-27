// Import react and react-router components
import React from "react";
import { Link } from "react-router-dom";

// Import spinner
import Spinner from "./Spinner";

// Register functional component
const Register = props => {

    // Initiate vars for form
    let email, password, name, password_confirmation;

    /**
     * @func handleRegister
     * @param event
     * Handles form submissions
     **/
    const handleRegister = event => {
        event.preventDefault();
        props.registerUser(name.value, email.value, password.value, password_confirmation.value);
    };

    return (
        <div>
            <form onSubmit={handleRegister} action="" method="post">
                {/* input username */}
                <input
                    ref={input => (name = input)}
                    name="username"
                    type="text"
                    placeholder="Gebruikersnaam"
                />

                {/* input email */}
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

                {/* input confirmation */}
                <input
                    ref={input => (password_confirmation = input)}
                    name="password_confirmation"
                    type="password"
                    placeholder="Bevestig Wachtwoord"
                />

                <div className="splitbox">
                    {/* Inlog link */}
                    <Link to="/">
                        Inloggen
                    </Link>
                    {/* submit button */}
                    <button type="submit" disabled={props.loading}>
                        {props.loading ? <Spinner size="22px" color={"white"}/> : "Registreer"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
