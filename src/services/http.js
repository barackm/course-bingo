import axios from 'axios';
import { toast } from 'react-toastify';
import storage from '../utils/localStorage';

axios.defaults.headers.common.Authorization = storage.getAuthToken();
axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response
    && error.response.status >= 400
    && error.response.status < 500;

  if (!expectedError) {
    toast.error('An unexpected error occurred.');
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
