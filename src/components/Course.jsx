import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';
import { BsFillTrashFill } from 'react-icons/bs';

import defaultAvatar from './defaultAvatar.png';
import Stars from './common/Stars';

const Course = ({ course, dashboard, onRemoveCourse }) => {
  const {
    name, price, author, duration, id, image,
  } = course;
  const { first_name: firstName, last_name: lastName, avatar } = author;
  return (
    <div className="course-main-wrapper d-flex flex-column">
      { dashboard && (
      <button type="button" className="course-delete-btn" onClick={() => onRemoveCourse(course.id)}>
        <IconContext.Provider value={{ className: 'course-delete-trash-icon' }}>
          <BsFillTrashFill />
        </IconContext.Provider>
      </button>
      )}
      <Link to={`/courses/${id}`} className="course-image-wrapper">
        <img
          src={image || 'https://images.unsplash.com/photo-1501556466850-7c9fa1fccb4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80'}
          alt="course"
        />
      </Link>
      <div className="course-info-wrapper">
        <div className="course-name-title d-flex flex-between">
          <h4 className="course-title">{name}</h4>
          <h4 className="course-price">
            $
            {price}
          </h4>
        </div>
        <div className="course-author-duration d-flex flex-between">
          <Link to={`/profile/${author.id}`} className="course-author-image d-flex">
            <div>
              <div className="image-wrapper">
                <img src={avatar || defaultAvatar} alt="author" />
              </div>
            </div>
            <div className="course-author-name d-flex flex-column">
              <h4 className="author-name">
                {firstName}
                {' '}
                {lastName}
              </h4>
              <div className="author-starts">
                <Stars />
              </div>
            </div>
          </Link>
          <div className="course-duration d-flex flex-center text-center">
            {duration}
            {' '}
            Hours
          </div>
        </div>
      </div>
    </div>
  );
};

Course.defaultProps = {
  dashboard: true,
  onRemoveCourse: () => {},
};

Course.propTypes = {
  course: PropTypes.objectOf(PropTypes.any).isRequired,
  dashboard: PropTypes.bool,
  onRemoveCourse: PropTypes.func,
};

export default Course;
