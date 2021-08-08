import jwt from 'jsonwebtoken';
import { toast } from 'react-toastify';
import http from '../../services/http';

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

export const signupUserAsync = (user) => async (dispatch) => {
  dispatch(authApiCallStart());
  try {
    const response = await http.post(`${endPoint}/users`, { user });
    storage.setAuthToken(response.data);
    const loggedInUser = jwt.decode(response.data);
    dispatch(signupSuccess(loggedInUser));
    toast.success(`Welcome ${loggedInUser.first_name}!`);
  } catch (error) {
    dispatch(signupFailure(error.response.data.message));
    toast.error(error.response.data.message || 'Something went wrong!');
  }
};

export const loginUserAsync = (user) => async (dispatch) => {
  dispatch(authApiCallStart());
  try {
    const response = await http.post(`${endPoint}/sessions`, user);
    storage.setAuthToken(response.data);
    const loggedInUser = jwt.decode(response.data.data);
    dispatch(loginSuccess(loggedInUser));
    toast.success(`😊 ${response.data.message}`);
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
    toast.error(`😢 ${error.response.data.message}` || 'Something went wrong');
  }
};

export const logoutUser = () => (dispatch) => {
  storage.removeAuthToken();
  dispatch(authLogout());
};
