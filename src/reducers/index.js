import { combineReducers } from 'redux';

import { addTodo } from './todo';
import { visibilityFilter } from './filter';

const reducers = combineReducers({
  addTodo,
  visibilityFilter,
})

export default reducers;
