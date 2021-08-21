import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';

import Navbar from '../components/common/Navbar';
import CoursesList from './CoursesList';
import Counter from '../components/common/Counter';
import { loadCoursesAsync } from '../store/thunks/coursesThunk';
import { toggleSidebar } from '../store/actions/actionCreators';
import LoadingSpinner from '../components/common/LoadingSpinner';

const Home = (props) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const {
    history, currentUser, courses, loadCourses, toggleSidebar, loading,
  } = props;
  useEffect(() => {
    if (!currentUser) history.replace('/login');
    loadCourses();
  }, []);
  const handleIndexChange = (index) => {
    setCurrentIndex(index);
  };

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
          leftAction={toggleSidebar}
        />
      </div>

      {loading ? (
        <div className="loadin-spinner-wrapper d-flex flex-center">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <CoursesList courses={courses} onIndexChange={handleIndexChange} />
          <div className="home-courses-counter-wrapper d-flex flex-center">
            <Counter min={currentIndex + 1} max={courses.length} />
          </div>
          {' '}
        </>
      )}
    </div>
  );
};

Home.defaultProps = {
  currentUser: null,
};

Home.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  courses: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadCourses: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  courses: state.courses.list,
  loading: state.courses.loading,
});

const mapDispatchToProps = {
  loadCourses: () => loadCoursesAsync(),
  toggleSidebar: () => toggleSidebar(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
