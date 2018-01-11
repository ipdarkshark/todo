import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import createSagaMiddleware from 'redux-saga';
import decode from 'jwt-decode';

import rootSaga from 'sagas';
import { setAuthToken } from 'utils/setAuthToken';
import { signInSuccess } from 'actions';

const sagaMiddleware = createSagaMiddleware();

const storeData = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  storeData.dispatch(signInSuccess(decode(localStorage.jwtToken)))
}

sagaMiddleware.run(rootSaga);

export default storeData;