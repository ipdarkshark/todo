import { combineReducers } from 'redux';
import { addTodo } from './todo';

const reducers = combineReducers({
  addTodo,
})

export default reducers;
