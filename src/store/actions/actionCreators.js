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
  ADD_FAVOURITE_SUCCESS,
  ADD_FAVOURITE_FAILURE,
  REMOVE_FAVOURITE_SUCCESS,
  REMOVE_FAVOURITE_FAILURE,
  LOAD_FAVOURITES_FAILURE,
  LOAD_FAVOURITES_SUCCESS,
  ADD_COURSE_SUCCESS,
  ADD_COURSE_FAILURE,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_FAILURE,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
  LOAD_USER_FAILURE,
  LOAD_USER_SUCCESS,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
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

export const addCourseSuccess = (course) => ({
  type: ADD_COURSE_SUCCESS,
  payload: course,
});

export const addCourseFailure = (error) => ({
  type: ADD_COURSE_FAILURE,
  payload: error,
});

export const toggleSidebar = () => ({
  type: TOGGLE_SIDEBAR,
});

export const addFavouriteSuccess = (data) => ({
  type: ADD_FAVOURITE_SUCCESS,
  payload: data,
});

export const addFavoriteFailure = (error) => ({
  type: ADD_FAVOURITE_FAILURE,
  payload: error,
});

export const removeFavouriteSuccess = (data) => ({
  type: REMOVE_FAVOURITE_SUCCESS,
  payload: data,
});

export const removeFavouriteFailure = (error) => ({
  type: REMOVE_FAVOURITE_FAILURE,
  payload: error,
});

export const loadFavouritesSuccess = (favourites) => ({
  type: LOAD_FAVOURITES_SUCCESS,
  payload: favourites,
});

export const loadFavouritesFailure = (error) => ({
  type: LOAD_FAVOURITES_FAILURE,
  payload: error,
});

export const loadUsersSuccess = (users) => ({
  type: LOAD_USERS_SUCCESS,
  payload: users,
});

export const loadUsersFailure = (error) => ({
  type: LOAD_USERS_FAILURE,
  payload: error,
});

export const removeUserSuccess = (user) => ({
  type: REMOVE_USER_SUCCESS,
  payload: user,
});

export const removeUserFailure = (error) => ({
  type: REMOVE_USER_FAILURE,
  payload: error,
});

export const loadUserSuccess = (user) => ({
  type: LOAD_USER_SUCCESS,
  payload: user,
});

export const loadUserFailure = (error) => ({
  type: LOAD_USER_FAILURE,
  payload: error,
});

export const updateUserSuccess = (user) => ({
  type: UPDATE_USER_SUCCESS,
  payload: user,
});

export const updateUserFailure = (error) => ({
  type: UPDATE_USER_FAILURE,
  payload: error,
});
