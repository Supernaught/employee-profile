 import { combineReducers } from 'redux';

 import user from './userReducer.js';
 import tweet from './tweetsReducer.js';
 import filter from './filterUsersReducer.js';

 const rootReducer = combineReducers({
 	user,
 	tweet,
 	filter
 });

 export default rootReducer;