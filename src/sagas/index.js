import { put, fork } from 'redux-saga/effects';

import * as actions from '../actions';
import { exEventRegister } from './exEventRegister';
//import { fetchPostsEventWatcher } from './fetchPosts';
import { postsRootEventWatcher } from './posts';
import { registerRootEventWatcher } from './register';
import { loginRootEventWatcher } from './login';
import { cookieRootEventWatcher } from './cookie';
import { draftRootEventWatcher } from './draft';

function* preprocessor() {
  yield put( actions.updateAccountFromCookie() );
  yield put( actions.fetchPosts() );
  yield put( actions.fetchRegionPostCount() );
}

export default function* rootSaga() {
  yield fork( exEventRegister );
  yield fork( postsRootEventWatcher );
  //yield fork( fetchPostsEventWatcher );
  yield fork( registerRootEventWatcher );
  yield fork( loginRootEventWatcher );
  yield fork( cookieRootEventWatcher );
  yield fork( draftRootEventWatcher );

  yield fork( preprocessor );
}

