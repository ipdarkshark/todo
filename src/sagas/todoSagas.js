import { takeEvery, put, call } from 'redux-saga/effects';

import { getAllTodos, addNewTodo, deleteTodo, editTodo } from 'api';

import {
  GET_TODOS_REQUEST,
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from 'const';

import {
  getAllTodosSuccess,
  getAllTodosFail,
  addTodoSuccess,
  addTodoFail,
  deleteTodoSuccess,
  deleteTodoFail,
  editTodoSuccess,
  editTodoFail,
} from 'actions';

function* getAllTodosSaga({payload}) {
  try {
    const todos = yield getAllTodos();
    yield put(getAllTodosSuccess(todos))
  } catch(err) {
    yield put(getAllTodosFail())
  }
}

function* addNewTodoSaga({text}) {
  try {
    const newTodo = yield addNewTodo(text);
    yield put(addTodoSuccess(newTodo))
  } catch(err) {
    yield put(addTodoFail())
  }
}

function* deleteTodoSaga({id}) {
  try {
    const todoID = yield deleteTodo(id);
    yield put(deleteTodoSuccess(todoID))
  } catch(err) {
    yield put(deleteTodoFail())
  }
}

function* editTodoSaga({id, text}) {
  try {
    const editedTodo = yield editTodo(id, text);
    yield put(editTodoSuccess(editedTodo.id, editedTodo.title))
  } catch(err) {
    yield put(editTodoFail())
  }
}

export default function* todosSaga() {
  yield [
    takeEvery(GET_TODOS_REQUEST, getAllTodosSaga),
    takeEvery(ADD_TODO, addNewTodoSaga),
    takeEvery(DELETE_TODO, deleteTodoSaga),
    takeEvery(EDIT_TODO, editTodoSaga)
  ];
}

