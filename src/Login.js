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

        {/* title */}
        <div className="title">
          Login
        </div>

        {/* input username */}
        <div className="input">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"/>
        </div>

        {/* input password */}
        <div className="input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"/>
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
