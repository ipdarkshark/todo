import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import StarterPage from 'containers/starterPage';
import SignIN from 'containers/sign-in';
import SignUP from 'containers/sign-up';
import NotFound from 'containers/NotFound';

const GuestRouter = () => (
  <Switch>
    <Route exact path="/" component={StarterPage} />
    <Route exact path="/sign-in" component={SignIN} />
    <Route exact path="/sign-up" component={SignUP} />
    <Route component={NotFound} />
  </Switch>
);

export default withRouter(GuestRouter);
