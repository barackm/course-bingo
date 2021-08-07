import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  AUTH_API_CALL_START,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from './actionTypes';

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
