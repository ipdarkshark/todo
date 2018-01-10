import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { addTodo } from './todo';
import { auth } from './auth';
import { visibilityFilter } from './filter';

const reducers = combineReducers({
  addTodo,
  auth,
  visibilityFilter,
  form: formReducer
})

export default reducers;
