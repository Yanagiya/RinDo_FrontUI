import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import login from './login';
import register from './register';
import users from './users';
import blogposts from './blogposts';
import draft from './draft';

export default combineReducers({
  login,
  register,
  users,
  blogposts,
  draft,
  form
});
