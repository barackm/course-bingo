import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import Navbar from '../components/common/Navbar';
import CoursesList from './CoursesList';
import Counter from '../components/common/Counter';
import { loadCoursesAsync } from '../store/thunks/coursesThunk';

const Home = (props) => {
  const {
    history, currentUser, courses, loadCourses,
  } = props;
  useEffect(() => {
    if (!currentUser) return history.replace('/login');
    return loadCourses();
  }, []);
  console.log(courses);
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
      <CoursesList />
      <div className="home-courses-counter-wrapper d-flex flex-center">
        <Counter />
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
};

const mapStateToProps = (state) => ({
  currentUser: state.auth.currentUser,
  courses: state.courses.list,
});

const mapDispatchToProps = {
  loadCourses: () => loadCoursesAsync(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
