import todos from 'todos';
import * as types from 'const';

const {
  ADD_TODO,
  DELETE_TODO,
} = types;

export const addTodo = (state = todos, action) => {
  switch(action.type) {
    case ADD_TODO: 
      let newId = state.length;
      return [...state, {
        title: action.text,
        completed: false,
        id: ++newId
      }]
    case DELETE_TODO: 
      let index = state.findIndex(todo => todo.id === action.id);
      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ]
    default: 
      return state;
  }
}