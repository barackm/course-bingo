import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signupUserAsync } from '../../store/thunks/authThunk';
import AppForm from '../common/AppForm';
import AppInput from '../common/AppInput';
import SubmitBtn from '../common/SubmitBtn';
import validationSchema from '../validation/userValidation';

const SignUp = (props) => {
  useEffect(() => {
    const { currentUser, history } = props;
    return currentUser ? history.replace('/') : '';
  });
  const handleSubmit = (values) => {
    const { signupUser } = props;
    const { email, password } = values;
    const user = {
      email,
      password,
      first_name: values.firstname,
      last_name: values.lastname,
      password_confirmation: values.passwordConfirmation,
    };
    signupUser(user);
  };

  const { loading } = props;
  return (
    <div className="login-page-main-container signup d-flex flex-column">
      <div className="login-overlay" />
      <AppForm
        initialValues={{
          email: '',
          password: '',
          firstname: '',
          lastname: '',
          passwordConfirmation: '',
        }}
        onSubmit={handleSubmit}
        validate={validationSchema}
      >
        <form className="login-page-main d-flex flex-column">
          <div className="login-header d-flex flex-center flex-column text-center">
            <h1>Sign up</h1>
            <p>
              Hey there, Welcome to Course Bingo.
              <br />
              Let&apos;s create an account to start managing your courses.
            </p>
          </div>
          <AppInput type="text" name="firstname" placeholder="Firstname" />
          <AppInput type="text" name="lastname" placeholder="Latname" />
          <AppInput type="email" name="email" placeholder="Email" />
          <AppInput type="password" name="password" placeholder="Password" />
          <AppInput
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm Password"
          />
          <SubmitBtn type="submit" label="Sign up" loading={loading} />
        </form>
      </AppForm>
      <div className="signup-details d-flex flex-center">
        Already have an account?
        <Link to="/login" className="sign-up-link">
          Sign in here
        </Link>
      </div>
    </div>
  );
};

SignUp.defaultProps = {
  loading: false,
  currentUser: null,
};

SignUp.propTypes = {
  signupUser: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  currentUser: PropTypes.objectOf(PropTypes.any),
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  signupUser: (user) => signupUserAsync(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
