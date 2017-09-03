import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as types from '../actions/type';
import server from '../utils/server';

function* loginSend( action ) {
  const { email, password } = action.payload;
  server.login( email, password );
}

function* loginSuccess( action ) {
  const userData = action.payload;
  yield put( actions.updateAccount( userData ) );
  yield put( actions.setAccountToCookie( userData ) );
}

function* logout() {
  server.logout();
  const userData = {
    userName: null,
    userId: null,
    password: null,
    email: null,
    country1: null,
    country2: null,
    country3: null,
    postNumber: null,
    evalPoint: null,
  };
  yield put( actions.updateAccount( userData ) );
  yield put( actions.setAccountToCookie( userData ) );
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
