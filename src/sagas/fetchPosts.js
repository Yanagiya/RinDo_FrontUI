import { takeEvery } from 'redux-saga';
import { put, fork, call } from 'redux-saga/effects';

import * as actions from '../actions';
import * as urls from '../config/urls';
import { defaultParams as defaultFetchParams } from '../redux/modules/utils/fetch';

export function* fetchPosts( payload ) {
  const { body, method } = payload;
  const url = urls.api + body;

  const fetchParams = {
    ...defaultFetchParams,
    ...{method: method}
  };
  //const response = await fetch(url, fetchParams);
  const [response, json] = yield call( getResponse, url, fetchParams );
  console.log("## response ##");
  console.log(response);
  console.log(json);
  console.log("##############");

  if (response.status >= 200 && response.status < 300) {
    console.log("## success ##");
    yield put( actions.fetchPostsSuccess( json ) );
  } else {
    console.log("## failure ##");
    yield put( actions.fetchPostsFailure( json ) );
  }
}

async function getResponse( url, params ) {
  const response = await fetch( url, params );
  const json = await response.json();
  return [response, json];
}

export function* fetchPostsEventWatcher() {
  yield* takeEvery( actions.FETCH_POSTS, fetchPosts );
}
