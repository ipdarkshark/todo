import * as types from 'const';

const {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  SET_VISIBILITY_FILTER,
  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
} = types;

export const addTodo = text => ({type: ADD_TODO, text});
export const deleteTodo = id => ({type: DELETE_TODO, id});
export const toggleTodo = id => ({type: TOGGLE_TODO, id});
export const editTodo = (id, text) => ({type: EDIT_TODO, id, text});
export const setVisibilityFilter = filter => ({type: SET_VISIBILITY_FILTER, filter});

export const getAllTodos = () => ({type: GET_TODOS_REQUEST});
export const getAllTodosSuccess = todos => ({type: GET_TODOS_SUCCESS, todos});
export const getAllTodosFail = () => ({type: GET_TODOS_FAIL});
