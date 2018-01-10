import { fork, put } from 'redux-saga/effects';

import todoSagas from './todoSagas';
import authSaga from './authSaga';

export default function* rootSaga() {
  yield [
    fork(todoSagas),
    fork(authSaga)
  ];
}
