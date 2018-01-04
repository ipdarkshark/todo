import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIN from 'containers/sign-in';
import SignUP from 'containers/sign-up';
import Todos from 'containers/todos';

import './styles/styles.scss';

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path='/sign-in' component={SignIN}/>
      <Route path='/sign-up' component={SignUP}/>
      <Route path='/todos' component={Todos}/>
    </Switch>
  </div>
)

export default App;
