import { eventChannel } from 'redux-saga';
import { put, take, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import { SOCKET_EVENT } from '../constants';
import server from '../utils/server';

function subscribe( socket ) {
  return eventChannel( emitter => {
    eventCatcher( SOCKET_EVENT.CATCH_POSTS, socket, emitter );
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
      case SOCKET_EVENT.CATCH_POSTS:
        yield fork( catchPostsProcess, data );
        break;
      case SOCKET_EVENT.REGISTER_RESULT:
        yield fork( registerResultProcess, data );
        break;
      case SOCKET_EVENT.LOGIN_RESULT:
        yield fork( loginResultProcess, data );
        break;
    }
  }
}

function* catchPostsProcess( data ) {
  yield put( actions.catchPosts( data ) );  
}

function* registerResultProcess( data ) {
  const { result } = data;

  if (result) {
    yield put( actions.registerSuccess( data ) );
  } else {
    yield put( actions.registerFailure( data ) );
  }
}

function* loginResultProcess( data ) {
  const { result } = data;

  if (result) {
    yield put( actions.loginSuccess( data ) );
  } else {
    yield put( actions.loginFailure( data ) );
  }
}

export function* exEventRegister() {
  yield fork( channelWatcher );
}
