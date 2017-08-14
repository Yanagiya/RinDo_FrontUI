import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as types from '../actions/type';
import { server } from '../utils/server';

function* loginSend( action ) {
  const { userName, password } = action.payload;
  server.login( userName, password );
}

function* loginSuccess( action ) {
  const { userName, userId, password } = action.payload;
  yield put( actions.updateAccount( userName, userId, password ) );
}

function* logout() {
  server.logout();
  yield put( actions.updateAccount( null, null, null ) );
}

function* loginSendEventWatcher() {
  yield* takeEvery( types.LOGIN_SEND, loginSend );
}

function* loginSuccessEventWatcher() {
  yield* takeEvery( types.LOGIN_SUCCESS, loginSuccess );
}

function* logoutEventWatcher() {
  yield* takeEvery( types.LOGOUT, logout );
}

export function* loginRootEventWatcher() {
  yield fork( loginSendEventWatcher );
  yield fork( loginSuccessEventWatcher );
  yield fork( logoutEventWatcher );
}
