import { server } from '../../Root';

const LOGIN = 'login/LOGIN';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'login/LOGIN_FAILURE';

const initialState = {
  userName: null,
  password: null,
  userId: null,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      return {
        userName: payload.userName,
        password: payload.password,
        userId: payload.userId,
      };
    case LOGIN_FAILURE:
      return {
        userName: payload.userName,
        password: payload.password,
        userId: payload.userId,
      };
    default:
      return state;
  }
}

export function login(userName, password) {
  return (dispatch, getState) => {
    server.login( userName, password );
    dispatch({
      type: LOGIN,
      payload: {
        userName: userName,
        password: password,
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
      return getState();
  }
}

