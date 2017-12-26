import * as types from 'const';

const {
  ADD_TODO,
  DELETE_TODO,
} = types;

export const addTodo = text => ({type: ADD_TODO, text});
export const deleteTodo = id => console.log(id) || ({type: DELETE_TODO, id});
