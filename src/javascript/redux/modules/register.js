import { server } from '../../Root';

const REGISTER = 'register/REGISTER';
const REGISTER_SUCCESS = 'register/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'register/REGISTER_FAILURE';

const initialState = {
  userName: null,
  password: null,
  userId: null,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
    case REGISTER_SUCCESS:
      return {
        userName: payload.userName,
        password: payload.password,
        userId: payload.userId,
      };
    case REGISTER_FAILURE:
      return {
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
      type: REGISTER,
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

