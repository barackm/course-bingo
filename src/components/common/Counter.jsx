import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ max }) => (
  <div className="counter-main-wraper">
    1 /
    {max}
  </div>
);

Counter.propTypes = {
  max: PropTypes.number.isRequired,
};
export default Counter;
