import storage from '../../utils/localStorage';
import {
  AUTH_API_CALL_START,
  LOGIN_SUCCESS,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  currentUser: storage.getCurrentUser(),
  isAuthenticated: !!storage.getCurrentUser(),
  loading: false,
  error: null,
  isAdmin: storage.getCurrentUser() ? storage.getCurrentUser().is_admin : false,
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
        isAdmin: action.payload.is_admin,
        isAuthenticated: true,
        error: null,
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
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: action.payload,
        isAdmin: action.payload.is_admin,
        isAuthenticated: true,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        currentUser: null,
        isAdmin: false,
        isAuthenticated: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isAdmin: false,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};

export default auth;
