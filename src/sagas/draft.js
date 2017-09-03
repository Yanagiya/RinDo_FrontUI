import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as types from '../actions/type';
import server from '../utils/server';

function* completeDraft( action ) {
  const { postId, title, poster, body, userId, country, goodPoint } = action.payload;
  server.sendDraft( postId, title, poster, body, userId, country, goodPoint );
}

function* completeDraftEventWatcher() {
  yield* takeEvery( types.COMPLETE_DRAFT, completeDraft );
}

export function* draftRootEventWatcher() {
  yield fork( completeDraftEventWatcher );
}
