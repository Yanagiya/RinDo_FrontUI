import { bindActionCreators } from 'redux';
import * as UserActions from './redux/modules/users';
import * as BlogActions from './redux/modules/blogposts';
import * as AccountActions from './redux/modules/account';

export function bootstrap({ dispatch }) {
  const userActions = bindActionCreators(UserActions, dispatch);
  const blogActions = bindActionCreators(BlogActions, dispatch);
  const accountActions = bindActionCreators(AccountActions, dispatch);

  return () => {
    blogActions.fetchPosts(0, 10);
    userActions.fetchUsers();
    accountActions.initAccount();
  };
}

export function editPost({ dispatch }) {
  const actions = bindActionCreators(BlogActions, dispatch);

  return ({ params }) => {
    actions.setDraft(parseInt(params.id, 10));
  };
}

