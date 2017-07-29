import { server } from '../../Root';

export const REGISTER_INIT = 'register/REGISTER_INIT';
export const REGISTER_SEND = 'register/REGISTER_SEND';
export const REGISTER_SUCCESS = 'register/REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'register/REGISTER_FAILURE';

export const REGISTER_BEFORE = 'REGISTER_BEFORE';
export const REGISTER_AFTER  = 'REGISTER_AFTER';

const initialState = {
  condition: REGISTER_BEFORE,
  userName: null,
  password: null,
  userId: null,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_INIT:
      return initialState
    case REGISTER_SUCCESS:
      return {
        condition: REGISTER_AFTER,
        userName: payload.userName,
        password: payload.password,
        userId: payload.userId,
      };
    case REGISTER_FAILURE:
      return {
        condition: REGISTER_AFTER,
        userName: payload.userName,
        password: payload.password,
        userId: payload.userId,
      };
    default:
      return state;
  }
}

export function register(userName, password) {
  return (dispatch, getState) => {
    server.register( userName, password );
    dispatch({
      type: REGISTER_SEND,
      payload: {
        userName: userName,
        password: password,
      }
    });
  };
}

export function onRegisterResult( registerResult ) {
  console.log("## registerResult ##");
  console.log(registerResult);
  console.log("####################");
  switch ( registerResult.result ) {
    case true:
      return ( dispatch, getState ) => {
        dispatch({
          type: REGISTER_SUCCESS,
          payload: {
            userName: registerResult.userName,
            password: registerResult.password,
            userId: registerResult.userId,
          }
        });
      };
    case false:
      return ( dispatch, getState ) => {
        dispatch({
          type: REGISTER_FAILURE,
          payload: {
            userName: null,
            password: null,
            userId: null,
          }
        });
      };
    default:
      return getState();
  }
}

