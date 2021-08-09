import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

import { loadCoursesAsync } from '../store/thunks/coursesThunk';
import { toggleSidebar } from '../store/actions/actionCreators';
import Navbar from '../components/common/Navbar';
import CoursesList from './CoursesList';
import Counter from '../components/common/Counter';

const Dashboard = (props) => {
  const [currentTab, setCurrentTab] = useState('courses');

  const {
    courses, history, currentUser, isAdmin, toggleSidebar, loadCourses,
  } = props;

  useEffect(() => {
    if (!currentUser) history.replace('/login');
    if (!isAdmin) history.replace('/');
    // console.log('hey there');
    loadCourses();
  }, []);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="dashboard-main-container">
      <div className="dashboard-header">
        <Navbar
          title="Administrator"
          rightIcon={(
            <IconContext.Provider value={{ className: 'home-search-icon' }}>
              <GoSearch />
            </IconContext.Provider>
          )}
          leftAction={toggleSidebar}
        />
        <div className="dashboard-tabs-wrapper d-flex flex-center">
          <ul className="d-flex flex-center tabs-wrapper flex-unit">
            <li className="flex-unit">
              <a
                href="#f"
                className={
                  currentTab === 'courses'
                    ? 'dashboard-tab d-flex flex-center active'
                    : 'dashboard-tab d-flex flex-center'
                }
                onClick={() => handleTabClick('courses')}
              >
                Courses
              </a>
            </li>
            <li className="flex-unit">
              <a
                href="#f"
                className={
                  currentTab === 'users'
                    ? 'dashboard-tab d-flex flex-center active'
                    : 'dashboard-tab d-flex flex-center'
                }
                onClick={() => handleTabClick('users')}
              >
                Users
              </a>
            </li>
          </ul>
        </div>
      </div>
      {currentTab === 'courses' ? (
        <div className="dashboard-courses-list-wrapper">
          <CoursesList courses={courses} dashboard />
          <div className="d-flex flex-center counter-container">
            <Counter />
          </div>
        </div>
      ) : (
        <div className="dashboard-users-list-wrapper">
          {' '}
          <h1>Users</h1>
          {' '}
        </div>
      )}
    </div>
  );
};

Dashboard.defaultProps = {
  currentUser: null,
};

Dashboard.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
  currentUser: PropTypes.objectOf(PropTypes.any),
  loadCourses: PropTypes.func.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses.list,
  currentUser: state.auth.currentUser,
  isAdmin: state.auth.isAdmin,
});

const mapDispatchToProps = {
  loadCourses: () => loadCoursesAsync(),
  toggleSidebar: () => toggleSidebar(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
