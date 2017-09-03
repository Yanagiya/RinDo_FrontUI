import * as types from '../actions/type';
import { LOGIN_STATE } from '../constants';

const initialState = {
  condition: LOGIN_STATE.BEFORE,
  result: null,
  email: null,
  password: null,
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
        email: payload.email,
        password: payload.password,
      };
    case types.LOGIN_FAILURE:
      return {
        condition: LOGIN_STATE.AFTER,
        result: false,
        email: payload.email,
        password: payload.password,
      };
    case types.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
