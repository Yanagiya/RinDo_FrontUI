import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as types from '../actions/type';
import * as urls from '../config/urls';
import { defaultParams as defaultFetchParams } from '../redux/modules/utils/fetch';

export function* fetchPosts( action ) {
  const { body, method } = action.payload;
  const url = urls.api + body;

  const fetchParams = {
    ...defaultFetchParams,
    ...{method: method}
  };
  //const response = await fetch(url, fetchParams);
  const [response, json] = yield call( getResponse, url, fetchParams );
  if (response.status >= 200 && response.status < 300) {
    yield put( actions.fetchPostsSuccess( json ) );
  } else {
    yield put( actions.fetchPostsFailure( json ) );
  }
}

async function getResponse( url, params ) {
  const response = await fetch( url, params );
  const json = await response.json();
  return [response, json];
}

export function* fetchPostsEventWatcher() {
  yield* takeEvery( types.FETCH_POSTS, fetchPosts );
}
