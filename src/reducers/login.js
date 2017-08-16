import * as types from '../actions/type';
import { LOGIN_STATE } from '../constants';

const initialState = {
  condition: LOGIN_STATE.BEFORE,
  result: null,
  userName: null,
  password: null,
  userId: null,
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case types.LOGIN_INIT:
      return initialState;
    case types.LOGIN_SUCCESS:
      return {
        condition: LOGIN_STATE.AFTER,
        result: true,
        userName: payload.userName,
        password: payload.password,
        userId: payload.userId,
      };
    case types.LOGIN_FAILURE:
      return {
        condition: LOGIN_STATE.AFTER,
        result: false,
        userName: payload.userName,
        password: payload.password,
        userId: null,
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
