import {
  ADD_FAVOURITE_FAILURE,
  ADD_FAVOURITE_SUCCESS,
  API_CALL_BEGIN,
  LOAD_FAVOURITES_SUCCESS,
  LOAD_FAVOURITES_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  list: [],
  loading: false,
  error: null,
};
const favourites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVOURITE_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        error: null,
      };
    case API_CALL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_FAVOURITE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOAD_FAVOURITES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_FAVOURITES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default favourites;
