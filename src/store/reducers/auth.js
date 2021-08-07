const initialState = {
  currentUser: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};
const auth = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTH_USER':
      return state;
    default:
      return state;
  }
};

export default auth;
