const initialState = {
  list: [],
  loading: false,
  error: null,
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_USERS':
      return state;
    default:
      return state;
  }
};

export default users;
