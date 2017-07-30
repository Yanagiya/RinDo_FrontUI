import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import login from './login';
import register from './register';
import account from './account';
import users from './users';
import blogposts from './blogposts';
import draft from './draft';

export default combineReducers({
  login,
  register,
  account,
  users,
  blogposts,
  draft,
  form
});
