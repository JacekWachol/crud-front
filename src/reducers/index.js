import { combineReducers } from 'redux';
import UsersReducer from './reducer_users';
import RegisterReducer from './reducer_register';

const rootReducer = combineReducers({
  users: UsersReducer,
  registerOutcome: RegisterReducer,
});

export default rootReducer;
