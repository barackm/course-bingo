import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import Navbar from '../components/common/Navbar';

const Home = (props) => {
  const { history, currentUser } = props;
  useEffect(() => (currentUser ? '' : history.replace('/login')));

  return (
    <div className="home-main-container">
      <div className="header">
        <Navbar
          title="courses"
          rightIcon={(
            <IconContext.Provider value={{ className: 'home-search-icon' }}>
              <GoSearch />
            </IconContext.Provider>
          )}
        />
      </div>
    </div>
  );
};

Home.defaultProps = {
  currentUser: null,
};

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(Home);
