import * as types from 'const';

const {
  ADD_TODO
} = types;

export const addTodo = text => ({type: ADD_TODO, text});

