import axios from 'axios';
import store from '../store';
import { getUsersSucess } from '../actions/userActions';

/**
* Search users
*/ 
export function searchUser(name) {
  return axios.get('/api/users')
    .then(response => {
      return response.data;
    });
}