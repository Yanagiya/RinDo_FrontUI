export const REGISTER_STATE = {
  BEFORE: 'REGISTER_BEFORE',
  AFTER: 'REGISTER_AFTER',
};

export const LOGIN_STATE = {
  BEFORE: 'LOGIN_BEFORE',
  AFTER: 'LOGIN_AFTER',
};

export const SOCKET_EVENT = {
  REGISTER: 'register',
  REGISTER_RESULT: 'registerResult',

  LOGIN: 'login',
  LOGIN_RESULT: 'loginResult',

  SEND_DRAFT: 'sendDraft',
  SEND_DRAFT_RESULT: 'sendDraftResult',

  FETCH_POSTS: 'fetchPosts',
  CATCH_POSTS: 'catchPosts',

  FETCH_REGION_INFO: 'fetchCountryInfo',
  CATCH_REGION_INFO: 'catchCountryInfo',
  FETCH_REGION_POST_COUNT: 'fetchRegionPostCount',
  CATCH_REGION_POST_COUNT: 'catchRegionPostCount',
};

