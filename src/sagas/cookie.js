import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as types from '../actions/type';
import cookie from '../utils/cookie';

function* setAccountToCookie( action ) {
  const { userName, userId, password } = action.payload;
  cookie.setAccountToCookie( userName, userId, password );
}

function* updateAccountFromCookie() {
  const { userName, userId, password } = cookie.getAccountFromCookie();
  yield put( actions.loginSend( userName, password ) );
}

function* setAccountToCookieEventWatcher() {
  yield* takeEvery( types.SET_ACCOUNT_TO_COOKIE, setAccountToCookie );
}

function* updateAccountFromCookieEventWatcher() {
  yield* takeEvery( types.UPDATE_ACCOUNT_FROM_COOKIE, updateAccountFromCookie );
}

export function* cookieRootEventWatcher() {
  yield fork( setAccountToCookieEventWatcher );
  yield fork( updateAccountFromCookieEventWatcher );
}
