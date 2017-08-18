import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as types from '../actions/type';
import * as urls from '../config/urls';
import { defaultParams as defaultFetchParams } from '../redux/modules/utils/fetch';
import server from '../utils/server';

function* fetchPosts( action ) {
  server.fetchPosts();
}

function* catchPosts( action ) {

}

function* fetchPostsEventWatcher() {
  yield* takeEvery( types.FETCH_POSTS, fetchPosts );
}

function* catchPostsEventWatcher() {
  yield* takeEvery( types.CATCH_POSTS, catchPosts );
}

export function* postsRootEventWatcher() {
  yield fork( fetchPostsEventWatcher );
  yield fork( catchPostsEventWatcher );
}
