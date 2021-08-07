import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const AppForm = (props) => {
  const {
    initialValues, children, onSubmit, validationSchema,
  } = props;

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      {() => <div className="formik-inputs-wrapper d-flex flex-center">{children}</div>}
    </Formik>
  );
};

AppForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node.isRequired,
  onSubmit: PropTypes.func.isRequired,
  validationSchema: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default AppForm;
