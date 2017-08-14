import { put, fork } from 'redux-saga/effects';

import * as actions from '../actions';
import { exEventRegister } from './exEventRegister';
import { fetchPostsEventWatcher } from './fetchPosts';
import { registerRootEventWatcher } from './register';
import { loginRootEventWatcher } from './login';

function* preprocessor() {
  yield put( actions.fetchPosts(0, 10) );
}

export default function* rootSaga() {
  yield fork( exEventRegister );
  yield fork( fetchPostsEventWatcher );
  yield fork( registerRootEventWatcher );
  yield fork( loginRootEventWatcher );
  yield fork( preprocessor );
}

