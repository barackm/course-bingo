import { toast } from 'react-toastify';

import http from '../../services/http';
import {
  apiCallBegin,
  loadUserFailure,
  loadUserSuccess,
} from '../actions/actionCreators';

const apiEndPoint = process.env.REACT_APP_API_END_POINT;

const loadUserAsync = (userId) => async (dispatch) => {
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

export default loadUserAsync;
