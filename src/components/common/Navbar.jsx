import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { MdMenu } from 'react-icons/md';

const Navbar = ({
  leftIcon, title, rightIcon, leftAction, rightAction,
}) => (
  <div className="navbar-main-container d-flex flex-between">
    {leftIcon && (
      <button type="button" className="navbar-btn left d-flex flex-center" onClick={leftAction}>
        {leftIcon}
      </button>
    )}
    <h1 className="navbar-menu-title">{title}</h1>
    {rightIcon && (
      <button type="button" className="navbar-btn right d-flex flex-center" onClick={rightAction}>
        {rightIcon}
      </button>
    )}
  </div>
);

Navbar.defaultProps = {
  leftIcon: (
    <IconContext.Provider value={{ className: 'home-hamburger' }}>
      <MdMenu />
    </IconContext.Provider>
  ),
  rightIcon: (
    <IconContext.Provider value={{ className: 'home-hamburger' }}>
      <MdMenu />
    </IconContext.Provider>
  ),
  title: 'Courses',
  leftAction: () => {},
  rightAction: () => {},
};

Navbar.propTypes = {
  leftIcon: PropTypes.objectOf(PropTypes.any),
  rightIcon: PropTypes.objectOf(PropTypes.any),
  title: PropTypes.string,
  leftAction: PropTypes.func,
  rightAction: PropTypes.func,
};

export default Navbar;
