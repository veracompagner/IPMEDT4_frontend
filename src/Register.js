import React from "react";
import "./Form.css";

class Login extends React.Component {

    /**
     * @func constructor
     * @param props
     * This function initializes the states.
     * Default shows the login boxes.
     * state has:
     * isLogin = show login
     * isRegister = show register
     **/
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            isRegister: false
        };
    }
    /**
     * @func showLogin
     * @func showRegister
     *
     * Two functions to change the states of isLogin and isRegister
     * These are used to hide/show the right divs
     **/

    showLogin() {
        this.setState({isLogin: true, isRegister: false});
    }
    showRegister() {
        this.setState({isRegister: true, isLogin: false});
    }


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
                    <button
                        className="loginRegister"
                        onClick={this.showLogin.bind(this)}>Login
                    </button>

                    <button
                        className="loginRegister loginRegisterActive"
                        onClick={this.showRegister.bind(this)}>Account Maken
                    </button>
                </div>
                <div className={"RegisterInputStuffs " + (this.state.isRegister ? "showstuffs": "hidestuffs")}>
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
                        onClick={this.submitLogin.bind(this)}>Registreer</button>
                </div>





            </div>
        );
    }

}

export default Login;
