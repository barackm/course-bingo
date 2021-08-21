import React from 'react';
import { useFormikContext } from 'formik';
import PropTypes from 'prop-types';

import AuthTextInput from './AuthTextInput';

const AppInput = (props) => {
  const {
    handleChange, values, handleBlur, errors,
  } = useFormikContext();
  const { name, placeholder, type } = props;
  return (
    <div>
      <AuthTextInput
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        error={errors[name]}
      />
    </div>
  );
};

AppInput.defaultProps = {
  placeholder: '',
  type: 'text',
};

AppInput.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default AppInput;
