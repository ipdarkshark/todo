import { fork, put } from 'redux-saga/effects';

import todoSagas from './todoSagas';

export default function* rootSaga() {
  yield [
    fork(todoSagas),
  ];
}
