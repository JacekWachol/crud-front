import axios from 'axios';

export const FETCH_USERS = 'FETCH_USERS';

const ROOT_URL = '/api/v1/';

function fetchUserSuccess(users) {
  return {
    type: FETCH_USERS,
    payload: users,
  };
}

export function fetchUsers() {
  return (dispatch) => {
    const fetchUsersUrl = `${ROOT_URL}user`;
    return axios.get(fetchUsersUrl).then((response) => {
      dispatch(fetchUserSuccess(response.data));
    });
  };
}