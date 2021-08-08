import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  AUTH_API_CALL_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  LOAD_COURSES_SUCCESS,
  LOAD_COURSES_FAILURE,
  API_CALL_BEGIN,
  TOGGLE_SIDEBAR,
} from './actionTypes';

export const apiCallBegin = () => ({
  type: API_CALL_BEGIN,
});

export const authApiCallStart = () => ({
  type: AUTH_API_CALL_START,
});

export const signupSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = (error) => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const authLogout = () => ({
  type: LOGOUT_SUCCESS,
});

export const loadCoursesSuccess = (courses) => ({
  type: LOAD_COURSES_SUCCESS,
  payload: courses,
});

export const loadCoursesFailure = (error) => ({
  type: LOAD_COURSES_FAILURE,
  payload: error,
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});
