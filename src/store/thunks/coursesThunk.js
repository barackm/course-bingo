import { toast } from 'react-toastify';

import http from '../../services/http';
import {
  addCourseSuccess,
  apiCallBegin,
  loadCoursesFailure,
  loadCoursesSuccess,
  removeCourseFailure,
  removeCourseSuccess,
} from '../actions/actionCreators';

const apiEndPoint = process.env.REACT_APP_API_END_POINT;
const cloudinaryEndPoint = process.env.REACT_APP_CLOUDINARY_ENDPOINT;
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

export const loadCoursesAsync = () => async (dispatch) => {
  dispatch(apiCallBegin);
  try {
    const response = await http.get(`${apiEndPoint}/courses`);
    dispatch(loadCoursesSuccess(response.data));
  } catch (error) {
    dispatch(
      loadCoursesFailure(
        error.response ? error.response.data.message : 'Error loading courses',
      ),
    );
    toast.error(
      error.response ? error.response.data.message : 'Error loading courses',
    );
  }
};

export const addCourseAsync = (course) => async (dispatch, getState) => {
  dispatch(apiCallBegin);
  try {
    const user = getState().auth.currentUser;
    const newCourse = {};
    newCourse.name = course.name;
    newCourse.description = course.description;
    newCourse.author_id = user.id;
    newCourse.duration = course.duration;
    newCourse.price = course.price;
    if (course.image) {
      const formData = new FormData();
      formData.append('file', course.image);
      formData.append('image', course.image);
      formData.append('upload_preset', uploadPreset);
      const responseImage = await fetch(cloudinaryEndPoint, {
        method: 'POST',
        body: formData,
        mode: 'cors',
      });
      const data = await responseImage.json();
      newCourse.image = data.url;
      const response = await http.post(`${apiEndPoint}/courses`, newCourse);
      dispatch(addCourseSuccess(response.data));
      toast.success('Course added');
    } else {
      newCourse.image = '';
      const response = await http.post(`${apiEndPoint}/courses`, newCourse);
      dispatch(addCourseSuccess(response.data));
      toast.success('Course added');
    }
  } catch (error) {
    dispatch(
      loadCoursesFailure(
        error.response ? error.response.data.message : 'Error adding course',
      ),
    );
    toast.error(
      error.response ? error.response.data.message : 'Error adding course',
    );
  }
};

export const removeCourseAsync = (courseId) => async (dispatch) => {
  dispatch(apiCallBegin());
  try {
    const response = await http.delete(`${apiEndPoint}/courses/${courseId}`);
    dispatch(removeCourseSuccess(response.data));
    toast.success('Course removed');
  } catch (error) {
    dispatch(
      removeCourseFailure(
        error.response ? error.response.data.message : 'Error removing course',
      ),
    );
    toast.error(
      error.response ? error.response.data.message : 'Error removing course',
    );
  }
};
