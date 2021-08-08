import { toast } from 'react-toastify';

import http from '../../services/http';
import {
  apiCallBegin,
  loadCoursesFailure,
  loadCoursesSuccess,
} from '../actions/actionCreators';

const apiEndPoint = process.env.REACT_APP_API_END_POINT;

export const loadCoursesAsync = () => async (dispatch) => {
  dispatch(apiCallBegin);
  try {
    const response = await http.get(`${apiEndPoint}/courses`);
    dispatch(loadCoursesSuccess(response.data));
  } catch (error) {
    dispatch(loadCoursesFailure(error.response.data.message));
    toast.error(error.response.data.message);
  }
};

export const myCourses = {};
