import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

const AppForm = (props) => {
  const { initialValues, children, onSubmit } = props;
  return (
    <Formik
      onSubmit={(values) => onSubmit(values)}
      initialValues={initialValues}
    >
      {() => children}
    </Formik>
  );
};

AppForm.propTypes = {
  initialValues: PropTypes.objectOf(PropTypes.shape(PropTypes.any)).isRequired,
  children: PropTypes.shape(PropTypes.node).isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default AppForm;
