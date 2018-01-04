import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { addTodo } from './todo';
import { visibilityFilter } from './filter';

const reducers = combineReducers({
  addTodo,
  visibilityFilter,
  form: formReducer,
})

export default reducers;
