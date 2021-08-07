import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthTextInput from '../common/AuthTextInput';
import SubmitBtn from '../common/SubmitBtn';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-page-main-container signup d-flex flex-column">
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
          <div className="names-wrapper d-flex">
            <AuthTextInput
              onChange={() => {}}
              placeholder="Firstname"
              value=""
              name="firstname"
              focus
            />
            <div className="input-separator" />
            <AuthTextInput
              onChange={() => {}}
              placeholder="Lastname"
              value=""
              name="lastname"
              focus
            />
          </div>
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
          <Link to="/login" className="sign-up-link">
            Sign in here
          </Link>
        </div>
      </div>
    );
  }
}

export default SignUp;
