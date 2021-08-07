import axios from 'axios';
import jwt from 'jsonwebtoken';

import {
  authApiCallStart,
  signupFailure,
  signupSuccess,
  loginSuccess,
  loginFailure,
  authLogout,
} from '../actions/actionCreators';
import storage from '../../utils/localStorage';

const endPoint = process.env.REACT_APP_API_END_POINT;
const storageKey = 'auth_token';

export const signupUserAsync = (user) => async (dispatch) => {
  dispatch(authApiCallStart());
  try {
    const response = await axios.post(`${endPoint}/users`, user);
    storage.set(storageKey, response.data);
    const loggedInUser = jwt.decode(response.data);
    dispatch(signupSuccess(loggedInUser));
  } catch (error) {
    dispatch(signupFailure(error.response.data.message));
  }
};

export const loginUserAsync = (user) => async (dispatch) => {
  dispatch(authApiCallStart());
  try {
    const response = await axios.post(`${endPoint}/sessions`, user);
    storage.set(storageKey, response.data);
    const loggedInUser = jwt.decode(response.data.data);
    dispatch(loginSuccess(loggedInUser));
  } catch (error) {
    dispatch(loginFailure(error.response.data.message || 'Failed to login'));
  }
};

export const logoutUser = () => (dispatch) => {
  storage.remove(storageKey);
  dispatch(authLogout());
};
