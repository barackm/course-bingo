import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ max, min }) => (
  <div className="counter-main-wraper">
    {min}
    {' '}
    /
    {max}
  </div>
);

Counter.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
};
export default Counter;
