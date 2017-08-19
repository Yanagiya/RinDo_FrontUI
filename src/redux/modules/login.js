//import { server } from '../../Root';

export const LOGIN_INIT = 'login/LOGIN_INIT';
export const LOGIN = 'login/LOGIN';
export const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'login/LOGIN_FAILURE';
export const LOGOUT = 'login/LOGOUT';

export const LOGIN_BEFORE = 'LOGIN_BEFORE';
export const LOGIN_AFTER  = 'LOGIN_AFTER';

const initialState = {
  condition: LOGIN_BEFORE,
  result: null,
  userName: null,
  password: null,
  userId: null,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_INIT:
      return initialState;
    case LOGIN_SUCCESS:
      return {
        condition: LOGIN_AFTER,
        result: true,
        userName: payload.userName,
        password: payload.password,
        userId: payload.userId,
      };
    case LOGIN_FAILURE:
      return {
        condition: LOGIN_AFTER,
        result: false,
        userName: payload.userName,
        password: payload.password,
        userId: payload.userId,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}

export function login(userName, password) {
  return (dispatch, getState) => {
    //server.login( userName, password );
    dispatch({
      type: LOGIN,
      payload: {
        userName: userName,
        password: password,
      }
    });
  };
}

export function logout() {
  return (dispatch, getState) => {
    //server.logout();
    dispatch({
      type: LOGIN,
      payload: {
        userName: null,
        password: null,
      }
    });
  };

}

export function onLoginResult( loginResult ) {
  console.log("## loginResult ##");
  console.log(loginResult);
  console.log("#################");
  switch ( loginResult.result ) {
    case true:
      return ( dispatch, getState ) => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            userName: loginResult.userName,
            password: loginResult.password,
            userId: loginResult.userId,
          }
        });
      };
    case false:
      return ( dispatch, getState ) => {
        dispatch({
          type: LOGIN_FAILURE,
          payload: {
            userName: null,
            password: null,
            userId: null,
          }
        });
      };
    default:
      return null;
  }
}

