import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GrClose } from 'react-icons/gr';

import defaultAvatar from '../assets/images/defaultAvatar.png';

const Sidebar = (props) => {
  const { currentUser } = props;
  const {
    first_name: firstName,
    last_name: lastName,
    email,
    avatar,
  } = currentUser;
  return (
    <div className="sidebar-main-container">
      <div className="sidebar-overlay" />
      <div className="sidebar-content-wrapper">
        <button type="button" className="close-sidebar-btn">
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
              <Link to="/" className="active">Dashboard</Link>
            </li>
            <li>
              <Link to="/">Profile</Link>
            </li>
            <li>
              <Link to="/">My Favourites</Link>
            </li>
          </ul>
          <ul className="sidebar-links-wrapper">
            <hr className="links-separator" />
            <li>
              <Link to="/">Help</Link>
            </li>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Sidebar);
