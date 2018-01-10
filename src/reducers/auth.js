import * as types from 'const';

const {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL
} = types;

export const auth = (state = {isAuthenticated: false, user: {}}, action) => {
  switch(action.type) {
    case SIGN_UP_SUCCESS: 
      return {
        isAuthenticated: true,
        user: action.user.user
      }
    default: 
      return state;
  }
}