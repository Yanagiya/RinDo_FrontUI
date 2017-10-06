import * as types from '../actions/type'

const initialState = [];

export default( state = initialState, action) => {
  const{ type, payload } = action;
  switch ( type ) {
    case types.CATCH_REGION_POST_COUNT:
      const regionList = [];
      for ( var key of Object.keys(payload) ) {
        regionList.push([key, payload[key]]);
      }
      return regionList;
    default:
      return state;
  }
}
