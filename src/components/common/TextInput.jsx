import React from 'react';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';

const TextInput = ({ name, type, placeholder }) => {
  const {
    handleChange, values, errors, touched, setFieldTouched,
  } = useFormikContext();
  return (
    <div className="main-text-input-container d-flex flex-column">
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={handleChange}
        onBlur={() => setFieldTouched(name)}
        value={values[name]}
        className="main-text-input"
      />
      {errors[name] && touched[name] && (
        <span className="input-error">{errors[name]}</span>
      )}
    </div>
  );
};

TextInput.defaultProps = {
  placeholder: '',
  type: 'text',
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default TextInput;
