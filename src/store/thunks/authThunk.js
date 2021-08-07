import axios from 'axios';
import jwt from 'jsonwebtoken';

import {
  authApiCallStart,
  signupFailure,
  signupSuccess,
} from '../actions/actionCreators';
import storage from '../../utils/localStorage';

const endPoint = process.env.REACT_APP_API_END_POINT;
const storageKey = 'auth_token';

const signupUserAsync = (user) => async (dispatch) => {
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

export default signupUserAsync;
