import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

import { toggleSidebar } from '../store/actions/actionCreators';
import { loadFavouritesAsync } from '../store/thunks/favouritesThunk';
import Navbar from '../components/common/Navbar';
import CoursesList from './CoursesList';
import Counter from '../components/common/Counter';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Favourites = (props) => {
  const {
    favourites,
    history,
    currentUser,
    toggleSidebar,
    loadFavourites,
    loading,
  } = props;
  const [currentIndex, setCurrentIndex] = React.useState(favourites.length === 0 ? 0 : 1);

  useEffect(() => {
    if (!currentUser) history.replace('/login');
    loadFavourites();
  }, []);

  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

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
      {loading ? (
        <div className="loadin-spinner-wrapper d-flex flex-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <CoursesList
            courses={newFavourites}
            onIndexChange={handleIndexChange}
          />
          {newFavourites.length === 0 ? (
            <h3 className="no-favourites text-center d-flex flex-center">Sorry, you don&apos;t have favourite courses yet.</h3>
          ) : (
            <div className="counter-container d-flex flex-center">
              <Counter max={favourites.length} min={currentIndex} />
            </div>
          )}
        </>
      )}
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
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  favourites: state.favourites.list,
  currentUser: state.auth.currentUser,
  loading: state.favourites.loading,
});

const mapDispatchToProps = {
  loadFavourites: () => loadFavouritesAsync(),
  toggleSidebar: () => toggleSidebar(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
