import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';

const SubmitBtn = (props) => {
  const { label, loading } = props;
  const { handleSubmit } = useFormikContext();
  return (
    <div className="submit-btn-main-container d-flex flex-center">
      <div className="submit-btn">
        <button
          type="submit"
          className="submit-btn-wrapper"
          onClick={handleSubmit}
        >
          {label}
        </button>
        {loading && (
          <div className="submit-btn-loading-wrapper d-flex flex-center">
            <div className="lds-ring">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

SubmitBtn.defaultProps = {
  loading: false,
};

SubmitBtn.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
};

export default SubmitBtn;
