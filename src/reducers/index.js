import { combineReducers } from 'redux';

import account from './account';
import blogposts from './blogposts';

export default combineReducers({
  account,
  blogposts,
});
