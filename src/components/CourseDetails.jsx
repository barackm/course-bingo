import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import { BiArrowBack } from 'react-icons/bi';

import Navbar from './common/Navbar';

const CourseDetails = (props) => {
  const {
    history, isAuthenticated, match, courses,
  } = props;

  const [course, setCourse] = useState('name');

  useEffect(() => {
    if (!isAuthenticated) {
      history.replace('/login');
    }
    const course = courses.find(
      (course) => course.id.toString() === match.params.id,
    );
    if (!course) return history.replace('/');
    return setCourse(course);
  }, []);
  return (
    <div className="course-details-page-main-container">
      <div className="header">
        <Navbar
          title="courses"
          leftIcon={(
            <IconContext.Provider value={{ className: 'home-search-icon' }}>
              <BiArrowBack />
            </IconContext.Provider>
          )}
          leftAction={history.goBack}
          rightIcon={(
            <IconContext.Provider value={{ className: 'home-search-icon' }}>
              <GoSearch />
            </IconContext.Provider>
          )}
        />
      </div>
      {course.name}
    </div>
  );
};

CourseDetails.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  courses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  courses: state.courses.list,
});

export default connect(mapStateToProps)(CourseDetails);
