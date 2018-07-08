import { FETCH_USERS } from '../actions/action_fetchUsers';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_USERS:

      return action.payload;
  }

  return state;
}