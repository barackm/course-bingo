import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

import { toggleSidebar } from '../store/actions/actionCreators';
import { loadFavouritesAsync } from '../store/thunks/favouritesThunk';
import Navbar from '../components/common/Navbar';
import CoursesList from './CoursesList';

const Favourites = (props) => {
  const {
    favourites, history, currentUser, toggleSidebar, loadFavourites,
  } = props;

  useEffect(() => {
    if (!currentUser) history.replace('/login');
    loadFavourites();
  }, []);

  const newFavourites = favourites.map((f) => f.course);
  return (
    <div className="dashboard-main-container">
      <div className="dashboard-header">
        <Navbar
          title="Favourites"
          rightIcon={(
            <IconContext.Provider value={{ className: 'home-search-icon' }}>
              <GoSearch />
            </IconContext.Provider>
          )}
          leftAction={toggleSidebar}
        />
      </div>
      {favourites && <CoursesList courses={newFavourites} />}
    </div>
  );
};

Favourites.defaultProps = {
  currentUser: null,
};

Favourites.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  favourites: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  loadFavourites: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  favourites: state.favourites.list,
  currentUser: state.auth.currentUser,
});

const mapDispatchToProps = {
  loadFavourites: () => loadFavouritesAsync(),
  toggleSidebar: () => toggleSidebar(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
