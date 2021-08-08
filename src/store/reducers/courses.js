const initialState = {
  list: [],
  loading: false,
  error: null,
};

const courses = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COURSE':
      return state;
    default:
      return state;
  }
};

export default courses;
