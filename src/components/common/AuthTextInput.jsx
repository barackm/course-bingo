import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';

const AuthTextInput = (props) => {
  const {
    error, placeholder, type, value, onChange, name,
  } = props;
  return (
    <div
      className={
        error
          ? 'auth-text-input-main-wrapper d-flex flex-center error'
          : 'auth-text-input-main-wrapper d-flex flex-center'
      }
    >
      <div className="input-container flex-unit d-flex flex-center">
        <input
          type={type}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="d-flex flex-unit flex-center text-center"
        />
      </div>
      <div className="validation-icon-wrapper">
        <IconContext.Provider
          value={{
            className: error ? 'auth-input-icon error' : 'auth-input-icon',
          }}
        >
          {error ? <BiErrorCircle /> : <BiCheckCircle />}
        </IconContext.Provider>
      </div>
    </div>
  );
};

AuthTextInput.defaultProps = {
  error: '',
  placeholder: '',
  type: 'text',
  value: '',
};

AuthTextInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default AuthTextInput;
