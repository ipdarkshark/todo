import * as types from 'const';

const {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,
  SIGN_OUT,
} = types;

export const auth = (state = {isAuthenticated: false, user: {}}, action) => {
  switch(action.type) {
    case SIGN_IN_SUCCESS: 
      return {
        isAuthenticated: true,
        user: action.user.user
      }

    case SIGN_OUT: 
      return {
        isAuthenticated: false,
        user: {}
      }
    
    default: 
      return state;
  }
}