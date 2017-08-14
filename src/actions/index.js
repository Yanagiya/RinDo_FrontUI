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

export const updateAccount = ( userName, userId, password ) => {
  return {
    type: types.UPDATE_ACCOUNT,
    payload: {
      userName: userName,
      userId: userId,
      password: password,
    },
  };
};

export const registerInit = () => {
  return {
    type: types.REGISTER_INIT,
  };
};

export const registerSend = ( userName, password ) => {
  return {
    type: types.REGISTER_SEND,
    payload: {
      userName: userName,
      password: password,
    },
  };
};

export const registerSuccess = ( userName, userId, password ) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload: {
      userName: userName,
      userId: userId,
      password: password,
    },
  };
};

export const registerFailure = ( userName, password ) => {
  return {
    type: types.REGISTER_FAILURE,
    payload: {
      userName: userName,
      password: password,
    },
  };
};

export const loginInit = () => {
  return {
    type: types.LOGIN_INIT,
  };
};

export const loginSend = ( userName, password ) => {
  return {
    type: types.LOGIN_SEND,
    payload: {
      userName: userName,
      password: password,
    },
  };
};

export const loginSuccess = ( userName, userId, password ) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: {
      userName: userName,
      userId: userId,
      password: password,
    },
  };
};

export const loginFailure = ( userName, password ) => {
  return {
    type: types.LOGIN_FAILURE,
    payload: {
      userName: userName,
      password: password,
    },
  };
};

export const logout = () => {
  return {
    type: types.LOGOUT,
  };
};

