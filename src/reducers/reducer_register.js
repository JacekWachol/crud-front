import { REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from '../actions/action_registerUser';

export default function (state = null, action) {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return { error: false, token: action.payload.token };

    case REGISTER_USER_ERROR:
      return { error: action.payload.status, errorType: action.payload.errorText };
  }

  return state;
}
