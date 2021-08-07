import {
  AUTH_API_CALL_START,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  currentUser: null,
  isAuthenticated: false,
  loading: false,
  error: null,
  isAdmin: false,
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_API_CALL_START:
      return {
        ...state,
        loading: true,
        error: null,
        isAdmin: false,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        isAdmin: action.payload.isAdmin,
        isAuthenticated: true,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        currentUser: null,
        isAdmin: false,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default auth;
