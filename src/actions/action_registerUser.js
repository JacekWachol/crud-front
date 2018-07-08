import axios from 'axios';

export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS';
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR';

const ROOT_URL = '/api/v1/';

function registerUserSuccess(token) {

  return {
    type: REGISTER_USER_SUCCESS,
    payload: token,
  };
}

function registerUserFailure(error) {
  return {
    type: REGISTER_USER_ERROR,
    payload: { status: error.status, errorText: error.data.error },
  };
}

export function registerUser(email, password) {
  const user = { email, password };
  return (dispatch) => {
    const registerUrl = `${ROOT_URL}auth/signup`;
    return axios.post(registerUrl, user).then((response) => {
      dispatch(registerUserSuccess(response.data));
    }).catch((error) => {
      dispatch(registerUserFailure(error.response));
    });
  };
}
