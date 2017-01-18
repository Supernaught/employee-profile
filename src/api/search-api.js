import axios from 'axios';
import store from '../store';
import { getUsersSucess } from '../actions/userActions';

/**
* Search users
*/ 
export function searchUser(name) {
	console.log("YO NIGGER ", name);
	return axios.get('/api/users', {
		params: {
			s: name
		}
	})
	.then(response => {
		return response.data;
	});
}