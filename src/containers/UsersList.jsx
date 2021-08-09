import React from 'react';
import User from '../components/User';

const UsersList = () => (
  <div className="users-list-main-container">
    <User user={{ first_name: 'barack', last_name: 'Mukelenga' }} />
  </div>
);

export default UsersList;
