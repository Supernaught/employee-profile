import axios from 'axios';
import store from '../store';
import { getUsersSucess } from '../actions/userActions';

/**
 * Get all users
 */
 export function getUsers() {
  return axios.get('/api/users')
    .then(response => {
      return response.data;
    });
}