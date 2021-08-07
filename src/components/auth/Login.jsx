import React from 'react';
import * as Yup from 'yup';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import SubmitBtn from '../common/SubmitBtn';
import AppForm from '../common/AppForm';
import AppInput from '../common/AppInput';
import { loginUserAsync } from '../../store/thunks/authThunk';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .required('Password is required')
    .min(6)
    .label('Password'),
});

const Login = (props) => {
  const handleSubmit = (values) => {
    const { loginUser } = props;
    loginUser(values);
  };

  return (
    <div className="login-page-main-container d-flex flex-column">
      <div className="login-overlay" />
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <form className="login-page-main d-flex flex-column">
          <div className="login-header d-flex flex-center flex-column text-center">
            <h1>Sign in</h1>
            <p>
              Hey there, Welcome to Course Bingo.
              <br />
              Let&apos;s Sign in to start managing your courses.
            </p>
          </div>
          <AppInput type="email" name="email" placeholder="Email" />
          <AppInput type="password" name="password" placeholder="Password" />
          <SubmitBtn type="submit" label="Sign in" />
        </form>
      </AppForm>
      <div className="signup-details d-flex flex-center">
        Don&apos;t have an account yet?
        <Link to="/signup" className="sign-up-link">
          Sign up here
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  loginUser: () => loginUserAsync(),
};

export default connect(null, mapDispatchToProps)(Login);
