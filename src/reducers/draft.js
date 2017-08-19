import * as types from '../actions/type';

const initialState = {
  title: null,
  poster: null,
  body: null,
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case types.INIT_DRAFT:
      return initialState;
    case types.EDIT_DRAFT:
      return {
        title: payload.title,
        poster: payload.poster,
        body: payload.body,
      };
    case types.COMPLETE_DRAFT:
      return {
        title: payload.title,
        poster: payload.poster,
        body: payload.body,
      };
    default:
      return state;
  }
};
