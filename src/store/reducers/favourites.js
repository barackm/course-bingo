import { ADD_FAVOURITE_SUCCESS } from '../actions/actionTypes';

const initialState = {
  list: [],
  loading: false,
  error: null,
};
const favourites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default favourites;
