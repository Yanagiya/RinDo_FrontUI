import * as types from './type';

export const fetchPosts = () => {
  return {
    type: types.FETCH_POSTS,
  };
};

export const catchPosts = ( payload ) => {
  return { 
    type: types.CATCH_POSTS,
    payload: payload,
  };
};

export const fetchPostsSuccess = ( payload ) => {
  return {
    type: types.FETCH_POSTS_SUCCESS,
    payload: payload,
  };
};

export const fetchPostsFailure = ( payload ) => {
  return {
    type: types.FETCH_POSTS_FAILURE,
    payload: payload,
  };
};

export const initDraft = () => {
  return {
    type: types.INIT_DRAFT,
  };
};

export const editDraft = ( title, poster, body ) => {
  return {
    type: types.EDIT_DRAFT,
    payload: {
      title: title,
      poster: poster,
      body: body,
    },
  };
};

export const updateDraftUi = ( draftData ) => {
  return {
    type: types.UPDATE_DRAFT_UI,
    payload: draftData,
  };
};

export const completeDraft = ( draftData ) => {
  return {
    type: types.COMPLETE_DRAFT,
    payload: draftData,
  };
};

export const updateAccount = ( userData ) => {
  return {
    type: types.UPDATE_ACCOUNT,
    payload: userData,
  };
};

export const setAccountToCookie = ( userData ) => {
  return {
    type: types.SET_ACCOUNT_TO_COOKIE,
    payload: userData, 
  };
};

export const updateAccountFromCookie = () => {
  return {
    type: types.UPDATE_ACCOUNT_FROM_COOKIE,
  };
};

export const registerInit = () => {
  return {
    type: types.REGISTER_INIT,
  };
};

export const registerSend = ( userData ) => {
  return {
    type: types.REGISTER_SEND,
    payload: userData,
  };
};

export const registerSuccess = ( userData ) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload: userData,
  };
};

export const registerFailure = ( userData ) => {
  return {
    type: types.REGISTER_FAILURE,
    payload: userData,
  };
};

let nextRegionId = 0;
export const addRegion = (regionName) => {
  return {
    type: types.ADD_REGION,
    payload: regionName,
  };
};

export const loginInit = () => {
  return {
    type: types.LOGIN_INIT,
  };
};

export const loginSend = ( userData ) => {
  return {
    type: types.LOGIN_SEND,
    payload: userData,
  };
};

export const loginSuccess = ( userData ) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: userData,
  };
};

export const loginFailure = ( userData ) => {
  return {
    type: types.LOGIN_FAILURE,
    payload: userData,
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};

export const regionInit = () => {
  return {
    type: types.REGION_INIT,
  };
}

export const fetchRegionPostCount = () => {
  return {
    type: types.FETCH_REGION_POST_COUNT,
  };
}

export const catchRegionPostCount = ( regionPostCount ) => {
  return {
    type: types.CATCH_REGION_POST_COUNT,
    payload: regionPostCount,
  };
}
