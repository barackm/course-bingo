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

const Home = (props) => {
  const {
    history, currentUser, courses, loadCourses, toggleSidebar,
  } = props;
  useEffect(() => {
    if (!currentUser) return history.replace('/login');
    return loadCourses();
  }, []);
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
      <CoursesList courses={courses} />
      <div className="home-courses-counter-wrapper d-flex flex-center">
        <Counter max={courses.length} />
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
  courses: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadCourses: PropTypes.func.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  courses: state.courses.list,
});

const mapDispatchToProps = {
  loadCourses: () => loadCoursesAsync(),
  toggleSidebar: () => toggleSidebar(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
