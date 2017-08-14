import * as types from '../actions/type';

const initialState = {
  userName: null,
  userId: null,
  password: null,
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case types.UPDATE_ACCOUNT:
      return {
        userName: payload.userName,
        userId: payload.userId,
        password: payload.password,
      };
    default:
      return state;
  }
};
