import {
  API_CALL_BEGIN,
  LOAD_USERS_FAILURE,
  LOAD_USERS_SUCCESS,
  REMOVE_USER_FAILURE,
  REMOVE_USER_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case API_CALL_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
        error: null,
      };
    case LOAD_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        list: state.list.filter((user) => user.id !== action.payload.id),
        error: null,
        loading: false,
      };
    case REMOVE_USER_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default users;
