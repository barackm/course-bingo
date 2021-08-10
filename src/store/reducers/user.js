import {
  API_CALL_BEGIN,
  LOAD_USER_FAILURE,
  LOAD_USER_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  foundUser: null,
  loading: false,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        foundUser: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_USER_FAILURE:
      return {
        ...state,
        foundUser: null,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default user;
