import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

const ROOT_URL = '/api/v1/';

export function fetchUsers() {
  const url = `${ROOT_URL}user`;
  const request = axios.get(url);
  return {
    type: FETCH_USERS,
    payload: request
  };
}
/*
axios.get('/api/v1/user').then((response) => {
  response.data.map((account) => console.log(account.email));
}).catch((error) => {
  console.log(error);
});*/
