import React from 'react';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';

const TextInput = ({
  name, type, placeholder, onChange,
}) => {
  const {
    handleChange, values, errors, touched, setFieldTouched,
  } = useFormikContext();
  return (
    <div className="main-text-input-container d-flex flex-column">
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={type === 'file' ? onChange : handleChange}
        onBlur={() => setFieldTouched(name)}
        value={type === 'file' ? undefined : values[name]}
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
  onChange: () => {},
};

TextInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

export default TextInput;
