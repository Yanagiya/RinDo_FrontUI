import { put, fork } from 'redux-saga/effects';

import * as actions from '../actions';
import { exEventRegister } from './exEventRegister';
import { fetchPostsEventWatcher } from './fetchPosts';
import { registerRootEventWatcher } from './register';
import { loginRootEventWatcher } from './login';
import { cookieRootEventWatcher } from './cookie';

function* preprocessor() {
  yield put( actions.fetchPosts(0, 10) );
  yield put( actions.getAccountFromCookie() );
}

export default function* rootSaga() {
  yield fork( exEventRegister );
  yield fork( fetchPostsEventWatcher );
  yield fork( registerRootEventWatcher );
  yield fork( loginRootEventWatcher );
  yield fork( cookieRootEventWatcher );

  yield fork( preprocessor );
}

