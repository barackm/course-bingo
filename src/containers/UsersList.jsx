import React from 'react';
import PropTypes from 'prop-types';
import User from '../components/User';

const UsersList = ({ users }) => (
  <div className="users-list-main-container">
    {users.map((user) => (
      <User user={user} key={user.id} />
    ))}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default UsersList;
