import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import { addTodo } from './todo';
import { auth } from './auth';
import { visibilityFilter } from './filter';

const reducers = combineReducers({
  addTodo,
  auth,
  visibilityFilter,
  form: formReducer,
  toastr: toastrReducer
})

export default reducers;
