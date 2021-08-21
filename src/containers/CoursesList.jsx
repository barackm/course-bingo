import React from 'react';
import PropTypes from 'prop-types';
import { Swiper, SwiperSlide } from 'swiper/react';

import Course from '../components/Course';

const CoursesList = ({
  courses, dashboard, onRemoveCourse, onIndexChange,
}) => (
  <div className="course-list-main-container">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={(item) => onIndexChange(item.realIndex)}
      className="course-list-swiper"

    >
      {courses.map((course) => (
        <SwiperSlide key={course.id} className={course.id}>
          <Course course={course} dashboard={dashboard} onRemoveCourse={onRemoveCourse} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

CoursesList.defaultProps = {
  dashboard: false,
  onRemoveCourse: () => {},
};

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.any).isRequired,
  dashboard: PropTypes.bool,
  onRemoveCourse: PropTypes.func,
  onIndexChange: PropTypes.func.isRequired,
};
export default CoursesList;
