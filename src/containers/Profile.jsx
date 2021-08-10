import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import { RiPencilFill } from 'react-icons/ri';

import loadUserAsync from '../store/thunks/userThunk';
import Navbar from '../components/common/Navbar';
import defaultAvatar from '../components/defaultAvatar.png';
import { toggleSidebar } from '../store/actions/actionCreators';
import EditProfile from '../components/EditProfile';
import { updateUserProfileAsync } from '../store/thunks/authThunk';

const Profile = ({
  isAuthenticated,
  loadUser,
  history,
  match,
  foundUser,
  error,
  loading,
  toggleSidebar,
  currentUser,
  updateUserProfile,
}) => {
  const [showEditForm, setShowEditForm] = useState(false);
  useEffect(() => {
    if (!isAuthenticated) {
      history.replace('/login');
    }
    const { id } = match.params;
    loadUser(id);
  }, []);

  const handleToggleEditForm = () => {
    setShowEditForm(!showEditForm);
  };

  const handleSubmit = (values) => {
    updateUserProfile(values);
  };

  return (
    <>
      {error ? (
        <Redirect to="/" />
      ) : (
        <div className="user-profile-page-main-container">
          {!foundUser || loading ? (
            <h3>loading...</h3>
          ) : (
            <div className="user-profile-main-content">
              <EditProfile
                onToggleEditProfile={handleToggleEditForm}
                user={foundUser}
                shown={showEditForm}
                onSubmit={handleSubmit}
              />
              <Navbar
                title="Profile"
                rightIcon={(
                  <IconContext.Provider
                    value={{ className: 'home-search-icon' }}
                  >
                    <GoSearch />
                  </IconContext.Provider>
                )}
                leftAction={toggleSidebar}
              />
              <div className="profile-user-image-wrapper d-flex flex-center">
                {foundUser.id === currentUser.id && (
                <a
                  href="#f"
                  className="user-profile-edit-icon-wrapper d-flex flex-center"
                  onClick={handleToggleEditForm}
                >
                  <IconContext.Provider
                    value={{ className: 'user-profile-icon-edit' }}
                  >
                    <RiPencilFill />
                  </IconContext.Provider>
                </a>
                )}
                <div className="profile-image-container">
                  <img src={foundUser.avatar || defaultAvatar} alt="" />
                </div>
              </div>
              <div className="profile-user-name-wrapper d-flex flex-center flex-column">
                <h1 className="profile-user-names text-center d-flex">
                  {foundUser.first_name}
                  {' '}
                  {foundUser.last_name}
                </h1>
                <span>{foundUser.email}</span>
                <p>
                  Joined at
                  {moment(foundUser.created_at).format('ll')}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

Profile.defaultProps = {
  foundUser: null,
  error: null,
};

Profile.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  loadUser: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  foundUser: PropTypes.objectOf(PropTypes.any),
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any).isRequired,
  updateUserProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  currentUser: state.auth.currentUser,
  foundUser: state.user.foundUser,
  loading: state.user.loading,
  error: state.user.error,
});

const mapDispatchToProps = {
  loadUser: (id) => loadUserAsync(id),
  toggleSidebar: () => toggleSidebar(),
  updateUserProfile: (user) => updateUserProfileAsync(user),
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
