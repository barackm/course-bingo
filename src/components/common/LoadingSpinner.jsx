import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const LoadingSpinner = () => (
  <div className="spinner-main-container d-flex flex-center">
    <HashLoader color="#f63e14" loading size={60} />
  </div>
);

export default LoadingSpinner;
