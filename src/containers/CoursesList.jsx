import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import Course from '../components/Course';

const CoursesList = ({ courses }) => (
  <div className="course-list-main-container">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => {}}
      onSwiper={() => {}}
      className="course-list-swiper"
    >
      {courses.map((course) => (
        <SwiperSlide key={course.id}>
          <Course course={course} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.any).isRequired,
};
export default CoursesList;
