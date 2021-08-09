import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GrClose } from 'react-icons/gr';

import { toggleSidebar } from '../store/actions/actionCreators';

import defaultAvatar from './defaultAvatar.png';

const Sidebar = (props) => {
  const { currentUser, sidebar, toggleSidebar } = props;
  const { pathname } = useLocation();
  const {
    first_name: firstName,
    last_name: lastName,
    email,
    avatar,
  } = currentUser;
  return (
    <div
      className={
        sidebar ? 'sidebar-main-container open' : 'sidebar-main-container'
      }
    >
      <button
        type="button"
        className={sidebar ? 'sidebar-overlay shown' : 'sidebar-overlay'}
        onClick={() => toggleSidebar()}
      >
        {}
      </button>
      <div className="sidebar-content-wrapper">
        <button
          type="button"
          className="close-sidebar-btn"
          onClick={() => toggleSidebar()}
        >
          <IconContext.Provider value={{ className: 'sidebar-close-icon' }}>
            <GrClose />
          </IconContext.Provider>
        </button>
        <div className="sidebar-header">
          <div className="user-image-wrapper">
            <img src={avatar || defaultAvatar} alt="profile" />
          </div>
          <h1 className="user-names">
            {firstName}
            {' '}
            {lastName}
            {' '}
          </h1>
          <span className="user-email">{email}</span>
        </div>
        <div className="sidebar-links-area d-flex flex-column">
          <ul className="sidebar-links-wrapper upper">
            <li>
              <Link to="/" className={pathname === '/' ? 'active' : ''} onClick={() => toggleSidebar()}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className={pathname === '/dashboard' ? 'active' : ''} onClick={() => toggleSidebar()}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/" className={pathname === '/profile' ? 'active' : ''} onClick={() => toggleSidebar()}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="/" className={pathname === '/favourites' ? 'active' : ''} onClick={() => toggleSidebar()}>
                My Favourites
              </Link>
            </li>
          </ul>
          <ul className="sidebar-links-wrapper">
            <hr className="links-separator" />
            <li>
              <Link to="/" className={pathname === '/favourites' ? 'active' : ''} onClick={() => toggleSidebar()}>
                About
              </Link>
            </li>
            <li>
              <Link to="/logout" onClick={() => toggleSidebar()}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  sidebar: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  sidebar: state.sidebar,
});

const mapDispatchToProps = {
  toggleSidebar: () => toggleSidebar(),
};
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
