import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { IconContext } from 'react-icons';
import { BsFillTrashFill } from 'react-icons/bs';

import defaultAvatar from './defaultAvatar.png';

const User = ({ user, currentUser }) => (
  <div className="user-item-main-container d-flex flex-center flex-between">
    <Link to="/" className="dashboard-user-details d-flex">
      <div className="dashboard-user-image-wrapper">
        <img
          className="dashboard-user-image"
          src={user.avatar || defaultAvatar}
          alt="profile"
        />
      </div>
      <div className="dashboard-user-names">
        <h3 className="names">
          {user.first_name}
          {' '}
          {user.last_name}
        </h3>
        <span className="joined-at">
          Joined at
          {' '}
          {moment(user.created_at).format('ll')}
        </span>
      </div>
    </Link>
    {!user.is_admin || user.id !== currentUser.id ? (
      <a href="#f" className="dashboard-user-delete-btn">
        <IconContext.Provider
          value={{ className: 'dashboard-delete-trash-icon' }}
        >
          <BsFillTrashFill />
        </IconContext.Provider>
      </a>
    ) : ''}
  </div>
);

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default User;
