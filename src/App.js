import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import history from 'utils/history';

import SignIN from 'containers/sign-in';
import SignUP from 'containers/sign-up';
import Todos from 'containers/todos';
import PrivateRoute from 'components/privateRoute';


import './styles/styles.scss';

const App = ({isAuthenticated}) => (
  <div className="app">
    <Router history={history}>
      <div>
        <Route exact path='/' component={SignIN}/>
        <Route path='/sign-up' component={SignUP}/>
        {/* <Route path='/todos' component={Todos}/> */}
        <PrivateRoute path="/todos" component={Todos} auth={isAuthenticated} />
      </div>
    </Router>
  </div>
)

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, null)(App);
