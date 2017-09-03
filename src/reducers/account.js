import * as types from '../actions/type';

const initialState = {
  userName: null,
  userId: null,
  password: null,
  email: null,
  userIcon: null,
  country1: null,
  country2: null,
  country3: null,
  postNumber: null,
  evalPoint: null,
};

export default ( state = initialState, action ) => {
  const { type, payload } = action;
  switch ( type ) {
    case types.UPDATE_ACCOUNT:
      return {
        userName: payload.userName,
        userId: payload.userId,
        password: payload.password,
        email: payload.email,
        userIcon: payload.userIcon,
        country1: payload.country1,
        country2: payload.country2,
        country3: payload.country3,
        postNumber: payload.postNumber,
        evalPoint: payload.evalPoint,
      };
    default:
      return state;
  }
};
