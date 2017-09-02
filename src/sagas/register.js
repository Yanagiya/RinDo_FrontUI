import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as types from '../actions/type';
import server from '../utils/server';

function* registerSend( action ) {
  const { userName, password, mailaddress } = action.payload;
  server.register( userName, password );
}

function* registerSendEventWatcher() {
  yield* takeEvery( types.REGISTER_SEND, registerSend );
}

export function* registerRootEventWatcher() {
  yield fork( registerSendEventWatcher );
}
