import { takeEvery, put, call } from 'redux-saga/effects';
import { FIRST_CONST } from '../const';
import { sayHello } from '../actions';

function* firstSaga(data) {
//   const { data } = yield call(smth);
//   yield put(action());
  console.log(data);

}

export default function* todosSaga() {
  yield [
    takeEvery(FIRST_CONST, firstSaga),
  ];
}

