import React, { Component } from 'react';
import AuthTextInput from '../common/AuthTextInput';
import SubmitBtn from '../common/SubmitBtn';

class SignUp extends Component {
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
            <h1>Sign up</h1>
            <p>
              Hey there, Welcome to Course Bingo.
              <br />
              Let&apos;s create an account to start managing your courses.
            </p>
          </div>
          <AuthTextInput
            onChange={() => {}}
            placeholder="Firstname"
            value=""
            name="firstname"
            focus
          />
          <AuthTextInput
            onChange={() => {}}
            placeholder="Lastname"
            value=""
            name="lastname"
            focus
          />
          <AuthTextInput
            onChange={() => {}}
            placeholder="Email"
            value=""
            type="email"
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
          <AuthTextInput
            placeholder="Confirm Password"
            value=""
            type="password"
            name="password"
            onChange={() => {}}
          />
          <SubmitBtn label="Sign up" />
        </form>
        <div className="signup-details d-flex flex-center">
          Already have an account?
          <a href="#f" className="sign-up-link">
            Sign in here
          </a>
        </div>
      </div>
    );
  }
}

export default SignUp;
