 import { combineReducers } from 'redux';

 import cart from './cart.js';
 import users from './usersReducer.js';
 import search from './searchReducer.js';

 const rootReducer = combineReducers({
 	cart,
 	users,
 	search
 });

 export default rootReducer;