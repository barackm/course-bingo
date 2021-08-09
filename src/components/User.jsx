import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

import { IconContext } from 'react-icons';
import { BsFillTrashFill } from 'react-icons/bs';

import defaultAvatar from './defaultAvatar.png';

const User = ({ user }) => (
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
        <span className="joined-at">{moment(Date.now).calendar()}</span>
      </div>
    </Link>
    <a href="#f" className="dashboard-user-delete-btn">
      <IconContext.Provider
        value={{ className: 'dashboard-delete-trash-icon' }}
      >
        <BsFillTrashFill />
      </IconContext.Provider>
    </a>
  </div>
);

User.propTypes = {
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default User;