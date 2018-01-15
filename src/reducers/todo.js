import * as types from 'const';

const {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,

  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,

  ADD_TODO_SUCCESS,
  ADD_TODO_FAIL,

  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAIL,
  DELETE_ALL_TODO,

  EDIT_TODO_SUCCESS,
  EDIT_TODO_FAIL,

  TOGGLE_TODO_SUCCESS,
  TOGGLE_TODO_FAIL,
} = types;

export const addTodo = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_TODO_SUCCESS:
      return state.map((todo) => {
        if (todo.id !== action.id) return todo;
        return Object.assign({}, todo, { completed: !todo.completed });
      });

    case EDIT_TODO_SUCCESS:
      return state.map((todo) => {
        if (todo.id !== action.id) return todo;
        return Object.assign({}, todo, { title: action.text });
      });

    case GET_TODOS_SUCCESS:
      return [...state, ...action.todos];

    case ADD_TODO_SUCCESS:
      return [...state, action.text];

    case DELETE_TODO_SUCCESS:
      const index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1),
      ];

    case DELETE_ALL_TODO:
      return state = [];

    default:
      return state;
  }
};
