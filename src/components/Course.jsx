import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import defaultAvatar from '../assets/images/defaultAvataR.png';

import Stars from './common/Stars';

const Course = ({ course }) => {
  const {
    name, price, author, duration,
  } = course;
  const { first_name: firstName, last_name: lastName, avatar } = author;
  return (
    <Link to="/" className="course-main-wrapper d-flex flex-column">
      <div className="course-image-wrapper">
        <img
          src="https://images.unsplash.com/photo-1501556466850-7c9fa1fccb4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"
          alt="course"
        />
      </div>
      <div className="course-info-wrapper">
        <div className="course-name-title d-flex flex-between">
          <h4 className="course-title">
            {name}
            {' '}
            et la suiste
          </h4>
          <h4 className="course-price">
            $
            {price}
          </h4>
        </div>
        <div className="course-author-duration d-flex flex-between">
          <div className="course-author-image d-flex">
            <div className="image-wrapper">
              <img
                src={avatar || defaultAvatar}
                alt="author"
              />
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
          </div>
          <div className="course-duration d-flex flex-center text-center">
            {duration}
            {' '}
            Hours
          </div>
        </div>
      </div>
    </Link>
  );
};

Course.propTypes = {
  course: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Course;
