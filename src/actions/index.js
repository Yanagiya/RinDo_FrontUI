export const FETCH_POSTS = 'blogposts/FETCH_POSTS';
export const FETCH_POSTS_SUCCESS = 'blogposts/FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'blogposts/FETCH_POSTS_FAILURE';

export const fetchPosts = ( start = 0, limit = 10 ) => {
  return {
    type: FETCH_POSTS,
  };
};

export const CREATE_POST = 'blogposts/CREATE_POST';
export const CREATE_POST_SUCCESS = 'blogposts/CREATE_POST_SUCCESS';
export const CREATE_POST_FAILURE = 'blogposts/CREATE_POST_FAILURE';

export const READ_POST = 'blogposts/READ_POST';
export const READ_POST_SUCCESS = 'blogposts/READ_POST_SUCCESS';
export const READ_POST_FAILURE = 'blogposts/READ_POST_FAILURE';

export const UPDATE_POST = 'blogposts/UPDATE_POST';
export const UPDATE_POST_SUCCESS = 'blogposts/UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'blogposts/UPDATE_POST_FAILURE';

export const REMOVE_POST = 'blogposts/REMOVE_POST';
export const REMOVE_POST_SUCCESS = 'blogposts/REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'blogposts/REMOVE_POST_FAILURE';

export const UPDATE_ACCOUNT = 'account/UPDATE_ACCOUNT';
export const updateAccount = ( userName, userId, password ) => {
  return {
    type: UPDATE_ACCOUNT,
    payload: {
      userName: userName,
      userId: userId,
      password: password,
    },
  };
};

