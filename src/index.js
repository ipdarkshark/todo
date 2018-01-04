import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import Register from 'components/register';
import Authorization from 'components/authorization';
import storeData from './store';

render(
  <Provider store={storeData}>
    <Authorization />
    {/* <Register /> */}
    {/* <App /> */}
  </Provider>,
  document.getElementById('root'),
);
