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

export const myCourses = {};
