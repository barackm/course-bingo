import React, { Component } from 'react';
import AuthTextInput from '../common/AuthTextInput';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="login-page-main-container d-flex flex-center">
        <div className="login-overlay" />
        <div className="login-page-main">
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
        </div>
      </div>
    );
  }
}

export default Login;
