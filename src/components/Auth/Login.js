// Import react and react-router components
import React from "react";
import { Link } from "react-router-dom";

// Import spinner
import Spinner from "./Spinner";

// Login functional component
const Login = props => {

    // Initiate vars for form
    let email, password;

    /**
     * @func handleLogin
     * @param event
     * Handles form submissions
     **/
    const handleLogin = event => {
        event.preventDefault();
        props.loginUser(email.value, password.value);
    };

    return (
        <div>
            <form onSubmit={handleLogin} action="" method="post">
                {/* input username */}
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

                <div className="splitbox">
                    {/* Register link */}
                    <Link to="/auth/register">
                        Registreren
                    </Link>
                    {/* submit button */}
                    <button type="submit" disabled={props.loading}>
                        {props.loading ? <Spinner color={"white"}/> : "Login"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
