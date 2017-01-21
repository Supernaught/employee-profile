 import { combineReducers } from 'redux';

 import user from './userReducer.js';
 import tweet from './tweetsReducer.js';
 import dropdownsearch from './dropdownSearchReducer.js';
  import search from './searchReducer.js';

 const rootReducer = combineReducers({
 	user,
 	tweet,
 	dropdownsearch,
 	search
 });

 export default rootReducer;