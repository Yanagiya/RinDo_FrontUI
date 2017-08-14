import { put, fork } from 'redux-saga/effects';

import * as actions from '../actions';
import { fetchPostsEventWatcher } from './fetchPosts';

function* preprocessor() {
  yield put( actions.fetchPosts(0, 10) );
}

export default function* rootSaga() {
  yield fork( fetchPostsEventWatcher );
  yield fork( preprocessor );
}

