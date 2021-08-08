// eslint:disable no-unused-vars
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { IconContext } from 'react-icons';
import { GoSearch } from 'react-icons/go';
import { BiArrowBack } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';

import Navbar from './common/Navbar';
import defaultAvatar from './defaultAvatar.png';
import Stars from './common/Stars';

const CourseDetails = (props) => {
  const {
    history, isAuthenticated, match, courses,
  } = props;

  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) {
      history.replace('/login');
    }
    const foundCourse = courses.find(
      (course) => course.id.toString() === match.params.id,
    );
    if (!foundCourse) return history.replace('/');
    return setCourse(foundCourse);
  }, []);

  const {
    image, author, price, duration,
  } = course || {};

  const { avatar, first_name: firstName, last_name: lastName } = author || {};

  return (
    <>
      {course && (
        <div className="course-details-page-main-container d-flex flex-column">
          <div className="header">
            <Navbar
              title="Course"
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
          <div className="course-details-content d-flex flex-column">
            <div className="course-details-image-wrapper">
              <div className="course-details-ovelay" />
              <img
                src={
                  image
                  || 'https://images.unsplash.com/photo-1501556466850-7c9fa1fccb4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80'
                }
                alt=""
                srcSet=""
              />
              <div className="course-details-author d-flex">
                <div className="course-details-author-names">
                  <div className="image-wrapper-course">
                    <img
                      src={avatar || defaultAvatar}
                      alt="author"
                      className="course-details-author"
                    />
                  </div>
                  <div className="author-details-name">
                    <h3>
                      {firstName}
                      {lastName}
                    </h3>
                    <Stars />
                  </div>
                </div>
                <div className="course-price-duration">
                  <h3>
                    $
                    {price}
                  </h3>
                  <span>
                    {duration}
                    {' '}
                    Hours
                  </span>
                </div>
              </div>
            </div>
            <div className="course-details-summary">
              <div className="description">
                <h4>About this course</h4>
                <p>{course.description}</p>
                <a
                  href="#f"
                  className="course-details-checvron-icon-container d-flex flex-center"
                >
                  <IconContext.Provider
                    value={{ className: 'course-details-icon' }}
                  >
                    <FiChevronDown />
                  </IconContext.Provider>
                </a>
              </div>
              <a
                href="#f"
                className="course-details-favoutite-btn d-flex flex-center"
              >
                Add to favourites
              </a>
            </div>
          </div>
        </div>
      )}
    </>
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
