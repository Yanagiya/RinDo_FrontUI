import { combineReducers } from 'redux';

import account from './account';
import blogposts from './blogposts';
import draft from './draft';
import register from './register';
import login from './login';

export default combineReducers({
  account,
  blogposts,
  draft,
  register,
  login,
});
