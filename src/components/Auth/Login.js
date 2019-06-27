import React from "react";
import { Link } from "react-router-dom";

import "./Auth.scss";

import Spinner from "../Spinner";

const Login = props => {

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
        <div id="login">

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
                    {/*Register link*/}
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
