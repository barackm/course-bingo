import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BiErrorCircle, BiCheckCircle } from 'react-icons/bi';

const AuthTextInput = (props) => {
  const {
    error, placeholder, type, value, onChange, name, focus,
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
          focus={focus}
          className="d-flex flex-unit flex-center text-center"
        />
      </div>
      {value.trim().length > 0 && (
        <div className="validation-icon-wrapper">
          <IconContext.Provider
            value={{
              className: error ? 'auth-input-icon error' : 'auth-input-icon',
            }}
          >
            {error ? <BiErrorCircle /> : <BiCheckCircle />}
          </IconContext.Provider>
        </div>
      )}
    </div>
  );
};

AuthTextInput.defaultProps = {
  error: false,
  placeholder: '',
  type: 'text',
  value: '',
  focus: false,
};

AuthTextInput.propTypes = {
  error: PropTypes.bool,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  focus: PropTypes.bool,
};
export default AuthTextInput;
