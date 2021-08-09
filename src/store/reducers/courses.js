import {
  API_CALL_BEGIN,
  LOAD_COURSES_FAILURE,
  LOAD_COURSES_SUCCESS,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
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
    case ADD_COURSE_SUCCESS:
      return {
        ...state,
        list: [action.payload, ...state.list],
        loading: false,
      };
    case ADD_COURSE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default courses;
