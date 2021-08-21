import React from 'react';
import PropTypes from 'prop-types';
import User from '../components/User';

const UsersList = ({ users, currentUser, onRemoveUser }) => (
  <div className="users-list-main-container">
    {users.map((user) => (
      <User user={user} key={user.id} currentUser={currentUser} onRemoveUser={onRemoveUser} />
    ))}
  </div>
);

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  currentUser: PropTypes.shape({}).isRequired,
  onRemoveUser: PropTypes.func.isRequired,
};

export default UsersList;
