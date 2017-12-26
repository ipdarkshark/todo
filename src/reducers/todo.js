import todos from 'todos';
import * as types from 'const';

const {
  ADD_TODO,
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
    default: 
      return state;
  }
}