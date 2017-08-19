import { eventChannel } from 'redux-saga';
import { put, take, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import { SOCKET_EVENT } from '../constants';
import server from '../utils/server';

function subscribe( socket ) {
  return eventChannel( emitter => {
    eventCatcher( SOCKET_EVENT.REGISTER_RESULT, socket, emitter );
    eventCatcher( SOCKET_EVENT.LOGIN_RESULT, socket, emitter );
    return () => {};
  });
}

function eventCatcher( event, socket, emitter ) {
  socket.on( event, (data) => {
    emitter({
      event: event,
      data: data,
    });
  });
}

function* channelWatcher() {
  const socket = server.socket;
  const ch = yield call( subscribe, socket );

  while (true) {
    const { event, data } = yield take(ch);
    switch ( event ) {
      case SOCKET_EVENT.REGISTER_RESULT:
        yield fork( registerResultProcess, data );
      case SOCKET_EVENT.LOGIN_RESULT:
        yield fork( loginResultProcess, data );
    }
  }
}

function* registerResultProcess( data ) {
  const { result, userName, userId, password } = data;

  if (result) {
    yield put( actions.registerSuccess( userName, userId, password ) );
  } else {
    yield put( actions.registerFailure( userName, password ) );
  }
}

function* loginResultProcess( data ) {
  const { result, userName, userId, password } = data;

  if (result) {
    yield put( actions.loginSuccess( userName, userId, password ) );
  } else {
    yield put( actions.loginFailure( userName, password ) );
  }
}

export function* exEventRegister() {
  yield fork( channelWatcher );
}
