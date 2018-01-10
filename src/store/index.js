import { createStore, applyMiddleware, compose } from 'redux';
import reducers from 'reducers';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const storeData = createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

export default storeData;