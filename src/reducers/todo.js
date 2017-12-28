import * as types from 'const';

const {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,

  GET_TODOS_SUCCESS,
  GET_TODOS_FAIL,
} = types;

export const addTodo = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO: 
      let newId = state.length;
      return [...state, {
        title: action.text,
        completed: false,
        id: newId + 1
      }]
    case DELETE_TODO: 
      let index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    case TOGGLE_TODO: 
      return state.map(todo => {
        if (todo.id !== action.id) return todo;
        return Object.assign({}, todo, {completed: !todo.completed})
      })
    case EDIT_TODO:
      return state.map(todo => {
        if (todo.id !== action.id) return todo;
        return Object.assign({}, todo, {title: action.text})
      })


    case GET_TODOS_SUCCESS:
      return [...state, ...action.todos]
    case GET_TODOS_FAIL:
      return state;
    default: 
      return state;
  }
}