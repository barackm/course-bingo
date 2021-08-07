import {
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  AUTH_API_CALL_START,
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
