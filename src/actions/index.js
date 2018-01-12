import * as types from 'const';
import { toastr } from 'react-redux-toastr';

const {
  ADD_TODO,
  DELETE_TODO,
  DELETE_ALL_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  SET_VISIBILITY_FILTER,

  GET_TODOS_REQUEST,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,

  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,

  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,

  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAIL,

  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAIL,

  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,

  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAIL,

  SIGN_OUT,

  DEFAULT_SUCCESS_TITLE,
  DEFAULT_ERROR_TITLE,
  DEFAULT_ERROR_CONTENT,
} = types;

export const addTodo = text => ({type: ADD_TODO, text});
export const deleteTodo = id => ({type: DELETE_TODO, id});
export const toggleTodo = id => ({type: TOGGLE_TODO, id});
export const editTodo = (id, text) => ({type: EDIT_TODO, id, text});
export const setVisibilityFilter = filter => ({type: SET_VISIBILITY_FILTER, filter});

export const getAllTodos = () => ({type: GET_TODOS_REQUEST});
export const getAllTodosSuccess = todos => ({type: GET_TODOS_SUCCESS, todos});
export const getAllTodosFail = () => ({type: GET_TODOS_FAIL});

export const addTodoSuccess = text => ({type: ADD_TODO_SUCCESS, text});
export const addTodoFail = () => ({type: ADD_TODO_FAIL});

export const deleteTodoSuccess = id => ({type: DELETE_TODO_SUCCESS, id});
export const deleteTodoFail = () => ({type: DELETE_TODO_FAIL});

export const deleteAllTodos = () => ({type: DELETE_ALL_TODO});

export const editTodoSuccess = (id, text) => ({type: EDIT_TODO_SUCCESS, id, text});
export const editTodoFail = () => ({type: EDIT_TODO_FAIL});

export const toggleTodoSuccess = id => ({type: TOGGLE_TODO_SUCCESS, id});
export const toggleTodoFail = () => ({type: TOGGLE_TODO_FAIL});

export const signUpRequest = user => ({type: SIGN_UP_REQUEST, user});
export const signUpSuccess = () => ({type: SIGN_UP_SUCCESS});
export const signUpFail = () => ({type: SIGN_UP_FAIL});

export const signInRequest = user => ({type: SIGN_IN_REQUEST, user});
export const signInSuccess = user => ({type: SIGN_IN_SUCCESS, user});
export const signInFail = () => ({type: SIGN_IN_FAIL});

export const signOut = () => ({type: SIGN_OUT});

export const showSuccess = ({ title = DEFAULT_SUCCESS_TITLE, content }) => toastr.success(title, content);
export const showError = (data) => {
  const {
    title = DEFAULT_ERROR_TITLE, content = DEFAULT_ERROR_CONTENT,
  } = typeof data === 'object' ? data : {};
  toastr.error(title, content);
};