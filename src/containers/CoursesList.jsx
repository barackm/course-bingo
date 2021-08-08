import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Course from '../components/Course';

const CoursesList = () => (
  <div className="course-list-main-container">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      className="course-list-swiper"
    >
      <SwiperSlide>
        <Course />
      </SwiperSlide>
      <SwiperSlide>
        <Course />
      </SwiperSlide>
    </Swiper>
  </div>
);

export default CoursesList;
