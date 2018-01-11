import { takeEvery, put } from 'redux-saga/effects';
import decode from 'jwt-decode';

import {
  signUp,
  signIn
} from 'api';

import history from 'utils/history';
import { setAuthToken } from 'utils/setAuthToken';

import {
  SIGN_UP_REQUEST,
  SIGN_IN_REQUEST,
} from 'const';

import {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  showSuccess,
  showError,
} from 'actions';

function* signUpSaga({user}) {
  try {
    const {title, content} = yield signUp(user);
    yield history.push('/');
    yield showSuccess({ title, content})
  } catch(err) {
    yield showError({ content: 'Cannot sign-up' })
    yield put(signUpFail())
  }
}

function* signInSaga({user}) {
  try {
    const token = yield signIn(user);
    const User = yield decode(token);
    yield localStorage.setItem('jwtToken', token);
    yield put(signInSuccess(User));
    yield setAuthToken(token);
    yield history.push('/todos');
  } catch(err) {
    yield showError({ content: 'Wrong password or username' })
    yield put(signUpFail())
  }
}

export default function* authSaga() {
  yield [
    takeEvery(SIGN_UP_REQUEST, signUpSaga),
    takeEvery(SIGN_IN_REQUEST, signInSaga)
  ];
}