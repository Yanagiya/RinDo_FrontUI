import * as types from '../actions/type';
import { REGISTER_BEFORE, REGISTER_AFTER } from '../constants';

const initialState = {
  condition: REGISTER_BEFORE,
  result: null,
  userName: null,
  userId: null,
  password: null,
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case types.REGISTER_INIT:
      return initialState;
    case types.REGISTER_SUCCESS:
      return {
        condition: REGISTER_AFTER,
        result: true,
        userName: payload.userName,
        password: payload.password,
        userId: payload.userId,
      };
    case types.REGISTER_FAILURE:
      return {
        condition: REGISTER_AFTER,
        result: false,
        userName: payload.userName,
        password: payload.password,
        userId: null,
      };
    default:
      return state;
  }
};
