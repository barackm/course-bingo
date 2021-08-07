import React, { Component } from 'react';
import AuthTextInput from '../common/AuthTextInput';
import SubmitBtn from '../common/SubmitBtn';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-page-main-container d-flex flex-column">
        <div className="login-overlay" />

        <form className="login-page-main d-flex flex-column flex-center">
          <div className="login-header d-flex flex-center flex-column text-center">
            <h1>Sign in</h1>
            <p>
              Hey there, Welcome to Course Bingo.
              <br />
              Let&apos;s Sign in to start managing your courses.
            </p>
          </div>
          <AuthTextInput
            onChange={() => {}}
            placeholder="Email"
            value=""
            name="email"
            focus
          />
          <AuthTextInput
            placeholder="Password"
            value=""
            type="password"
            name="password"
            onChange={() => {}}
          />
          <SubmitBtn label="Sign in" />
        </form>
        <div className="signup-details d-flex flex-center">
          Don&apos;t have an account yet?
          <a href="#f" className="sign-up-link">
            Sign up here
          </a>
        </div>
      </div>
    );
  }
}

export default Login;
