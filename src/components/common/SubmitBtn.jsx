import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

const SubmitBtn = (props) => {
  const { label } = props;
  const { handleSubmit } = useFormikContext();
  return (
    <button type="submit" className="submit-btn-wrapper" onClick={handleSubmit}>
      {label}
    </button>
  );
};

SubmitBtn.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SubmitBtn;
