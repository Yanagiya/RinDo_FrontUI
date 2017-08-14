import * as actions from '../actions';

const initialState = [];

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case actions.FETCH_POSTS_SUCCESS:
      return [...payload];
    default:
      return state;
  }
};

