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

        {/* title */}
        <div className="title">
          Register
        </div>

        {/* input username */}
        <div className="input">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Username"/>
        </div>

        {/* input mail */}
        <div className="input">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"/>
        </div>


        {/* input password */}
        <div className="input">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"/>
        </div>

        <div className="input">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"/>
        </div>

        {/* submit button */}
        <button
          type="button"
          className="loginButton"
          onClick={this.submitRegister.bind(this)}>Register</button>

      </div>
    );
  }
}

export default Register;
