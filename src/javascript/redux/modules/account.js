
export const UPDATE_ACCOUNT = 'account/UPDATE_ACCOUNT';

const initialState = {
  userName: null,
  userId: null,
};

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch ( type ) {
    case UPDATE_ACCOUNT:
      return {
        userName: payload.userName,
        userId: payload.userId,
      };
    default:
      return state;
  }
}

export function update_account( userData ) {
  const { userName, userId } = userData;
  return ( dispatch, getState ) => {
    dispatch({
      type: UPDATE_ACCOUNT,
      payload: {
        userName: userName,
        userId: userId,
      }
    });
  };
}
