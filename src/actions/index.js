import * as types from './type';

export const fetchPosts = ( start = 0, limit = 10 ) => {
  return {
    type: types.FETCH_POSTS,
    payload: {
      body: `/post?_start=${start}&_limit=${limit}`,
      method: 'get',
    },
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

export const completeDraft = ( postId, title, poster, body ) => {
  return {
    type: types.COMPLETE_DRAFT,
    payload: {
      postId: postId,
      title: title,
      poster: poster,
      body: body,
    },
  };
};

export const updateAccount = ( userName, userId, password, mailaddress ) => {
  return {
    type: types.UPDATE_ACCOUNT,
    payload: {
      userName: userName,
      userId: userId,
      password: password,
      mailaddress: mailaddress,
    },
  };
};

export const setAccountToCookie = ( userName, userId, password, mailaddress ) => {
  return {
    type: types.SET_ACCOUNT_TO_COOKIE,
    payload: {
      userName: userName,
      userId: userId,
      password: password,
      mailaddress: mailaddress,
    },
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

export const registerSend = ( userName, password, mailaddress ) => {
  return {
    type: types.REGISTER_SEND,
    payload: {
      userName: userName,
      password: password,
      mailaddress: mailaddress,
    },
  };
};

export const registerSuccess = ( userName, userId, password, mailaddress ) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload: {
      userName: userName,
      userId: userId,
      password: password,
      mailaddress: mailaddress,
    },
  };
};

export const registerFailure = ( userName, password, mailaddress ) => {
  return {
    type: types.REGISTER_FAILURE,
    payload: {
      userName: userName,
      password: password,
      mailaddress: mailaddress,
    },
  };
};

export const loginInit = () => {
  return {
    type: types.LOGIN_INIT,
  };
};

export const loginSend = ( userName, password, mailaddress ) => {
  return {
    type: types.LOGIN_SEND,
    payload: {
      userName: userName,
      password: password,
      mailaddress: mailaddress
    },
  };
};

export const loginSuccess = ( userName, userId, password, mailaddress) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: {
      userName: userName,
      userId: userId,
      password: password,
      mailaddress:mailaddress,
    },
  };
};

export const loginFailure = ( userName, password, mailaddress ) => {
  return {
    type: types.LOGIN_FAILURE,
    payload: {
      userName: userName,
      password: password,
      mailaddress: mailaddress,
    },
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};

