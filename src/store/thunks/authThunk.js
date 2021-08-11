import jwt from 'jsonwebtoken';
import { toast } from 'react-toastify';

import {
  authApiCallStart,
  signupFailure,
  signupSuccess,
  loginSuccess,
  loginFailure,
  authLogout,
  updateUserSuccess,
  updateUserFailure,
} from '../actions/actionCreators';
import storage from '../../utils/localStorage';
import http from '../../services/http';

const apiEndPoint = process.env.REACT_APP_API_END_POINT;
const cloudinaryEndPoint = process.env.REACT_APP_CLOUDINARY_ENDPOINT;
const uploadPreset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

export const signupUserAsync = (user) => async (dispatch) => {
  dispatch(authApiCallStart());
  try {
    const response = await http.post(`${apiEndPoint}/users`, { user });
    storage.setAuthToken(response.data);
    const loggedInUser = jwt.decode(response.data);
    dispatch(signupSuccess(loggedInUser));
    toast.success(`Welcome ${loggedInUser.first_name}!`);
    window.location.reload();
  } catch (error) {
    dispatch(signupFailure(error.response.data.message));
    toast.error(error.response.data.message || 'Something went wrong!');
  }
};

export const loginUserAsync = (user) => async (dispatch) => {
  dispatch(authApiCallStart());
  try {
    const response = await http.post(`${apiEndPoint}/sessions`, user);
    storage.setAuthToken(response.data.data);
    const loggedInUser = jwt.decode(response.data.data);
    dispatch(loginSuccess(loggedInUser));
    toast.success(`😊 ${response.data.message}`);
    window.location.reload();
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
    toast.error(`😢 ${error.response.data.message}`);
  }
};

export const logoutUser = () => (dispatch) => {
  storage.removeAuthToken();
  dispatch(authLogout());
};

export const updateUserProfileAsync = (user) => async (dispatch) => {
  dispatch(authApiCallStart());
  try {
    const newUser = {};
    newUser.first_name = user.first_name;
    newUser.last_name = user.last_name;
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.password_confirmation = user.password_confirmation;

    if (user.avatar) {
      const formData = new FormData();
      formData.append('file', user.avatar);
      formData.append('image', user.first_name);
      formData.append('upload_preset', uploadPreset);
      const responseImage = await fetch(cloudinaryEndPoint, { method: 'POST', body: formData, mode: 'cors' });
      const data = await responseImage.json();
      newUser.avatar = data.url;
      if (!data.url) throw new Error('Something went wrong!');
      const response = await http.put(`${apiEndPoint}/users/${user.id}`, { user: newUser });
      storage.setAuthToken(response.data.data);
      const loggedInUser = jwt.decode(response.data);
      dispatch(updateUserSuccess(loggedInUser));
      toast.success('Profile updated successfully!');
      window.location.reload();
    } else {
      const response = await http.put(`${apiEndPoint}/users/${user.id}`, { user: newUser });
      storage.setAuthToken(response.data);
      const loggedInUser = jwt.decode(response.data);
      dispatch(updateUserSuccess(loggedInUser));
      toast.success('Profile updated successfully!');
      window.location.reload();
    }
  } catch (error) {
    dispatch(updateUserFailure(error.response ? error.response.data.message : 'Something went wrong!'));
    toast.error(error.response ? error.response.data.message : 'Something went wrong!');
  }
};
