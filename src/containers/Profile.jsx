import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';

import loadUserAsync from '../store/thunks/userThunk';
import Navbar from '../components/common/Navbar';
import { toggleSidebar } from '../store/actions/actionCreators';

const Profile = ({
  isAuthenticated,
  loadUser,
  history,
  match,
  foundUser,
  error,
  loading,
  toggleSidebar,
}) => {
  useEffect(() => {
    if (!isAuthenticated) {
      history.replace('/login');
    }
    const { id } = match.params;
    loadUser(id);
  }, []);

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
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  currentUser: state.auth.user,
  foundUser: state.user.foundUser,
  loading: state.user.loading,
  error: state.user.error,
});

const mapDispatchToProps = {
  loadUser: (id) => loadUserAsync(id),
  toggleSidebar: () => toggleSidebar(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
