import React from 'react';
import PropTypes from 'prop-types';

const SubmitBtn = (props) => {
  const { label, type, onClick } = props;
  return (
    <button
      type={type === 'button' ? 'button' : 'submit'}
      className="submit-btn-wrapper"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

SubmitBtn.defaultProps = {
  type: 'button',
};

SubmitBtn.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default SubmitBtn;
