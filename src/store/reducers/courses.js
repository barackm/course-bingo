import {
  API_CALL_BEGIN,
  LOAD_COURSES_FAILURE,
  LOAD_COURSES_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const courses = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_COURSES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_COURSES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default courses;
