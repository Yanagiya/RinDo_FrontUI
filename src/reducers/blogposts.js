import * as types from '../actions/type';

const initialState = [];

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case types.FETCH_POSTS_SUCCESS:
      console.log("## payload ##");
      console.log(payload);
      console.log("#############");
      return [...payload];
    default:
      return state;
  }
};

