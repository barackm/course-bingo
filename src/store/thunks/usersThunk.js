import { toast } from 'react-toastify';

import {
  apiCallBegin,
  loadUsersFailure,
  loadUsersSuccess,
  removeUserFailure,
  removeUserSuccess,
  loadUserFailure,
  loadUserSuccess,
} from '../actions/actionCreators';
import http from '../../services/http';

const apiEndPoint = process.env.REACT_APP_API_END_POINT;

export const loadUsersAsync = () => async (dispatch) => {
  dispatch(apiCallBegin());
  try {
    const response = await http.get(`${apiEndPoint}/users`);
    dispatch(loadUsersSuccess(response.data));
  } catch (error) {
    dispatch(
      loadUsersFailure(
        error.response ? error.response.data : 'Failed to load users',
      ),
    );
    toast.error(error.response ? error.response.data : 'Failed to load users');
  }
};

export const removeUserAsync = (userId) => async (dispatch) => {
  dispatch(apiCallBegin());
  try {
    const response = await http.delete(`${apiEndPoint}/users/${userId}`);
    dispatch(removeUserSuccess(response.data));
    toast.success('User removed');
  } catch (error) {
    dispatch(
      removeUserFailure(
        error.response ? error.response.data : 'Failed to remove user',
      ),
    );
    toast.error(error.response ? error.response.data : 'Failed to remove user');
  }
};

export const loadUserAsync = (userId) => async (dispatch) => {
  dispatch(apiCallBegin());
  try {
    const response = await http.get(`${apiEndPoint}/users/${userId}`);
    dispatch(loadUserSuccess(response.data));
  } catch (error) {
    dispatch(
      loadUserFailure(
        error.response
          ? error.response.data.message
          : 'Failed to load the user',
      ),
    );
    toast.error(
      error.response ? error.response.data.message : 'Failed to load the user',
    );
  }
};
