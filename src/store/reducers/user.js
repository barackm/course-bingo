const initialState = {
  foundUser: null,
  loading: false,
  error: null,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        foundUser: action.payload,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default user;
