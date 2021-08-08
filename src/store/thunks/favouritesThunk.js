import { toast } from 'react-toastify';

import http from '../../services/http';
import {
  apiCallBegin,
  removeFavouriteSuccess,
  addFavouriteSuccess,
  removeFavouriteFailure,
  loadFavouritesFailure,
  loadFavouritesSuccess,
} from '../actions/actionCreators';

const apiEndPoint = process.env.REACT_APP_API_END_POINT;

export const addFavouriteAsync = (favourite) => async (dispatch) => {
  dispatch(apiCallBegin());
  try {
    const response = await http.post(`${apiEndPoint}/favourites`, favourite);
    dispatch(addFavouriteSuccess(response.data));
    toast.success('Added to favourites successfully.');
  } catch (error) {
    dispatch(loadFavouritesFailure(error.response.message));
    toast.error('Failed to add to favourites.');
  }
};

export const removeFavouriteAsync = (favourite) => async (dispatch) => {
  dispatch(apiCallBegin());
  try {
    const response = await http.delete(
      `${apiEndPoint}/favourites/${favourite.id}`,
    );
    dispatch(removeFavouriteSuccess(response.data));
    toast.success('Removed from favourites successfully.');
  } catch (error) {
    dispatch(removeFavouriteFailure(error.response.message));
    toast.error('Failed to remove from favourites.');
  }
};

export const loadFavouritesAsync = () => async (dispatch) => {
  dispatch(apiCallBegin());
  try {
    const response = await http.get(`${apiEndPoint}/favourites`);
    dispatch(loadFavouritesSuccess(response.data));
  } catch (error) {
    dispatch(loadFavouritesFailure(error.response.message));
  }
};
