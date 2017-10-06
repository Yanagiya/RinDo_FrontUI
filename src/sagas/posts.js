import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as types from '../actions/type';
import * as urls from '../config/urls';
import server from '../utils/server';

function* fetchPosts( action ) {
  server.fetchPosts();
}

function* fetchRegionPostCount( action ) {
  server.fetchRegionPostCount( 'world' );
}

function* fetchPostsEventWatcher() {
  yield* takeEvery( types.FETCH_POSTS, fetchPosts );
}

function* fetchRegionPostCountEventWatcher() {
  yield* takeEvery( types.FETCH_REGION_POST_COUNT, fetchRegionPostCount );
}

export function* postsRootEventWatcher() {
  yield fork( fetchPostsEventWatcher );
  yield fork( fetchRegionPostCountEventWatcher );
}
