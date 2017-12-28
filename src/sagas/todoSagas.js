import { takeEvery, put, call } from 'redux-saga/effects';

import { getAllTodos } from 'api';
import { GET_TODOS_REQUEST } from 'const';
import {getAllTodosSuccess, getAllTodosFail} from 'actions';

function* getAllTodosSaga(action) {
  try {
    const todos = yield getAllTodos();
    yield put(getAllTodosSuccess(todos))
  } catch(err) {
    yield put(getAllTodosFail())
  }
}

export default function* todosSaga() {
  yield [
    takeEvery(GET_TODOS_REQUEST, getAllTodosSaga),
  ];
}

