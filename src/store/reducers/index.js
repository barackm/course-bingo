import { combineReducers } from 'redux';
import auth from './auth';
import courses from './courses';

const reducer = combineReducers({ auth, courses });

export default reducer;
