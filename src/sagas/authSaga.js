import { takeEvery, put } from 'redux-saga/effects';
import decode from 'jwt-decode';

import { signUp } from 'api';

import {
  SIGN_UP_REQUEST,
} from 'const';

import {
  signUpSuccess,
  signUpFail,
} from 'actions';

function* signUpSaga({user}) {
  try {
    const token = yield signUp(user);
    const User = yield decode(token);
    yield localStorage.setItem('jwtToken', token);
    yield put(signUpSuccess(User));
    // yield put(push('/todos'));
  } catch(err) {
    yield put(signUpFail())
  }
}

export default function* authSaga() {
  yield [
    takeEvery(SIGN_UP_REQUEST, signUpSaga)
  ];
}