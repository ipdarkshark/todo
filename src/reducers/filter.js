import * as types from 'const';

const {
  SET_VISIBILITY_FILTER,
} = types;

export const visibilityFilter = (state = 'ALL', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};
