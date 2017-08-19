import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as types from '../actions/type';
import server from '../utils/server';

function* completeDraft( action ) {
  const { postId, title, poster, body } = action.payload;
  server.sendDraft( postId, title, poster, body );
}

function* completeDraftEventWatcher() {
  yield* takeEvery( types.COMPLETE_DRAFT, completeDraft );
}

export function* cookieRootEventWatcher() {
  yield fork( completeDraft );
}
