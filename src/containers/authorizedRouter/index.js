import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';

import Todos from 'containers/todos';
import NotFound from 'containers/NotFound';

const AuthorizedRouter = () => (
  <Switch>
    <Route exact path='/' component={Todos}/>
    <Redirect to='/' />
    {/* <Route component={NotFound} /> */}
  </Switch>
);

export default withRouter(AuthorizedRouter);