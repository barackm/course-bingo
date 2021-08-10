import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import PropTypes from 'prop-types';

import { loadCoursesAsync, addCourseAsync, removeCourseAsync } from '../store/thunks/coursesThunk';
import { toggleSidebar } from '../store/actions/actionCreators';
import Navbar from '../components/common/Navbar';
import CoursesList from './CoursesList';
import Counter from '../components/common/Counter';
import CourseForm from '../components/CourseForm';
import UsersList from './UsersList';
import { loadUsersAsync, removeUserAsync } from '../store/thunks/usersThunk';

const Dashboard = (props) => {
  const [currentTab, setCurrentTab] = useState('courses');
  const [showCourseForm, setShowCourseForm] = useState(false);

  const {
    courses, history, currentUser, isAdmin, toggleSidebar, loadCourses, addCourse, loadUsers, users,
    removeUser, removeCourse,
  } = props;

  useEffect(() => {
    if (!currentUser) history.replace('/login');
    if (!isAdmin) history.replace('/');
    // console.log('hey there');
    loadCourses();
    loadUsers();
  }, []);

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  const handleToggleCourseForm = () => {
    setShowCourseForm(!showCourseForm);
  };

  const handleSubmitForm = (values) => {
    addCourse(values);
  };

  return (
    <div className="dashboard-main-container">
      <CourseForm
        onSubmit={handleSubmitForm}
        shown={showCourseForm}
        onToggleCourseForm={handleToggleCourseForm}
      />
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
          <a
            href="#f"
            className="add-course-btn d-flex flex-center"
            onClick={handleToggleCourseForm}
          >
            Add a course
          </a>
          <CoursesList courses={courses} dashboard onRemoveCourse={removeCourse} />
          <div className="d-flex flex-center counter-container">
            <Counter max={courses.length} />
          </div>
        </div>
      ) : (
        <div className="dashboard-users-list-wrapper">
          <UsersList users={users} currentUser={currentUser} onRemoveUser={removeUser} />
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
  addCourse: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  removeUser: PropTypes.func.isRequired,
  removeCourse: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  courses: state.courses.list,
  currentUser: state.auth.currentUser,
  isAdmin: state.auth.isAdmin,
  users: state.users.list,
  removeUser: state.users.removeUser,
});

const mapDispatchToProps = {
  loadCourses: () => loadCoursesAsync(),
  toggleSidebar: () => toggleSidebar(),
  addCourse: (values) => addCourseAsync(values),
  loadUsers: () => loadUsersAsync(),
  removeUser: (userId) => removeUserAsync(userId),
  removeCourse: (courseId) => removeCourseAsync(courseId),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
