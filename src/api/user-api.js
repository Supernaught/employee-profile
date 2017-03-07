import axios from 'axios';
// import store from '../store';
import { getUsersSucess } from '../actions/userActions';

/**
 * Get all users
 */

export function getUsers(name = null, departments = null, status = false) {
	return axios.get('/api/users', {
		params: {
			s: name
		}
	})
	.then(response => {
		return response.data;
	});
}