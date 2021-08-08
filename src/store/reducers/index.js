import { combineReducers } from 'redux';
import auth from './auth';
import courses from './courses';
import sidebar from './sidebar';
import favourites from './favourites';

const reducer = combineReducers({
  auth,
  courses,
  sidebar,
  favourites,
});

export default reducer;
