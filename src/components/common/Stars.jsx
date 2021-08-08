import React from 'react';
import { IconContext } from 'react-icons';
import { BsFillStarFill } from 'react-icons/bs';

const Stars = () => (
  <div className="d-flex stars-container">
    <IconContext.Provider value={{ className: 'star' }}>
      <BsFillStarFill />
    </IconContext.Provider>
    <IconContext.Provider value={{ className: 'star' }}>
      <BsFillStarFill />
    </IconContext.Provider>
    <IconContext.Provider value={{ className: 'star' }}>
      <BsFillStarFill />
    </IconContext.Provider>
    <IconContext.Provider value={{ className: 'star' }}>
      <BsFillStarFill />
    </IconContext.Provider>
    <IconContext.Provider value={{ className: 'star uncomplete' }}>
      <BsFillStarFill />
    </IconContext.Provider>
  </div>
);

export default Stars;
