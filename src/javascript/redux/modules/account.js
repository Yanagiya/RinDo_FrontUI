import { cookie } from '../../Root';

export const UPDATE_ACCOUNT = 'account/UPDATE_ACCOUNT';

const initialState = {
  userName: null,
  userId: null,
  password: null,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch ( type ) {
    case UPDATE_ACCOUNT:
      return {
        userName: payload.userName,
        userId: payload.userId,
        password: payload.password,
      };
    default:
      return state;
  }
}

export function initAccount() {
  const userData = cookie.getAccountFromCookie();
  const { userName, userId, password } = userData;

  return ( dispatch, getState ) => {
    dispatch({
      type: UPDATE_ACCOUNT,
      payload: {
        userName: userName,
        userId: userId,
        password: password,
      }
    });
  };

}

export function updateAccount( userData ) {
  const { userName, userId, password } = userData;
  cookie.setAccountToCookie( userName, userId, password );

  return ( dispatch, getState ) => {
    dispatch({
      type: UPDATE_ACCOUNT,
      payload: {
        userName: userName,
        userId: userId,
        password: password,
      }
    });
  };
}

