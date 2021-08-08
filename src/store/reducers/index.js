import { combineReducers } from 'redux';
import auth from './auth';
import courses from './courses';
import sidebar from './sidebar';

const reducer = combineReducers({ auth, courses, sidebar });

export default reducer;
