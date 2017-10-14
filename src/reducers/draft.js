import * as types from '../actions/type';

const initialState = {
  postId: null,
  title: null,
  poster: null,
  body: null,
  userId: null,
  country: null,
  goodPoint: null,
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case types.INIT_DRAFT:
      return initialState;
    case types.EDIT_DRAFT:
      return {
        postId: payload.postId,
        title: payload.title,
        poster: payload.poster,
        body: payload.body,
        userId: payload.userId,
        country: payload.country,
        goodPoint: payload.goodPoint,
      };
    case types.UPDATE_DRAFT_UI:
      return {
        postId: payload.postId,
        title: payload.title,
        poster: payload.poster,
        body: payload.body,
        userId: payload.userId,
        country: payload.country,
        goodPoint: payload.goodPoint,
      };
    case types.COMPLETE_DRAFT:
      return {
        postId: payload.postId,
        title: payload.title,
        poster: payload.poster,
        body: payload.body,
        userId: payload.userId,
        country: payload.country,
        goodPoint: payload.goodPoint,
      };
    default:
      return state;
  }
};
