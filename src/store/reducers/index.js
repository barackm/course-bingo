import { combineReducers } from 'redux';
import auth from './auth';
import courses from './courses';
import sidebar from './sidebar';
import favourites from './favourites';
import users from './users';

const reducer = combineReducers({
  auth,
  courses,
  sidebar,
  favourites,
  users,
});

export default reducer;
