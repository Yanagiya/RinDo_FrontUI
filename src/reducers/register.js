import * as types from '../actions/type';
import { REGISTER_STATE } from '../constants';

const initialState = {
  condition: REGISTER_STATE.BEFORE,
  result: null,
  userName: null,
  password: null,
  email: null,
  country1: null,
  country2: null,
  country3: null,
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case types.REGISTER_INIT:
      console.log("## register_init ##");
      return initialState;
    case types.REGISTER_SUCCESS:
      return {
        condition: REGISTER_STATE.AFTER,
        result: true,
        userName: payload.userName,
        password: payload.password,
        email: payload.email,
        country1: payload.country1,
        country2: payload.country2,
        country3: payload.country3,
      };
    case types.REGISTER_FAILURE:
      return {
        condition: REGISTER_STATE.AFTER,
        result: false,
        userName: payload.userName,
        password: payload.password,
        email: payload.email,
        country1: payload.country1,
        country2: payload.country2,
        country3: payload.country3,
      };
    default:
      return state;
  }
};
