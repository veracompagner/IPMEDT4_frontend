import React from "react";
import {Link} from "react-router-dom";

import "./Login.scss";
import logo from "../../img/appLogo.png";

const Login = ({loginUser}) => {

    let email, password;
    /**
     * @func handleLogin
     * @param event
     * Handles form submissions
     **/
    const handleLogin = event => {
        event.preventDefault();
        loginUser(email.value, password.value);
    };
    return (
        <div id="login">
            <img className="logoImg" src={logo} alt="appLogo"></img>
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
                    <Link to="/register">
                        Registreren
                    </Link>
                    {/* submit button */}
                    <button type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    );

}

export default Login;
