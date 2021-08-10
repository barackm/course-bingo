import { combineReducers } from 'redux';
import auth from './auth';
import courses from './courses';
import sidebar from './sidebar';
import favourites from './favourites';
import users from './users';
import user from './user';

const reducer = combineReducers({
  auth,
  courses,
  sidebar,
  favourites,
  users,
  user,
});

export default reducer;
