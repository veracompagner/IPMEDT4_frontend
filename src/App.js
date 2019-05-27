import React from "react";
import Login from "./Login";
import Register from "./Register";
import "./App.css";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            isRegister: false
        };
    }

    //functions
    showLogin() {
        this.setState({isLogin: true, isRegister: false});
    }
    showRegister() {
        this.setState({isRegister: true, isLogin: false});
    }

    render() {

        return (
            <div>

                <img className="logoImg" src="./img/appLogo.png" alt="appLogo"></img>

                <div className="loginRegisterBox">
                    <button
                        className={"loginRegister " + (this.state.isLogin ? "loginRegisterActive": "")}
                        onClick={this.showLogin.bind(this)}>Login
                    </button>

                    <button
                        className={"loginRegister " + (this.state.isRegister ? "loginRegisterActive": "")}
                        onClick={this.showRegister.bind(this)}>Account Maken
                    </button>
                </div>


                <div>
                    {this.state.isLogin && <Login/>}
                    {this.state.isRegister && <Register/>}
                </div>

            </div>
        );
    }
}

export default App;
