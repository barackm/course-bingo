import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import Course from '../components/Course';

const CoursesList = ({ courses, dashboard }) => (
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
          <Course course={course} dashboard={dashboard} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

CoursesList.defaultProps = {
  dashboard: false,
};

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.any).isRequired,
  dashboard: PropTypes.bool,
};
export default CoursesList;
