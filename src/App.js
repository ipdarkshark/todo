import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import GuestRouter from 'containers/guestsRouter';
import AuthorizedRouter from 'containers/authorizedRouter';

import history from 'utils/history';

import './styles/styles.scss';

const App = ({ isAuthenticated }) => (
  <main className="main">
    <Router history={history}>
      {
        isAuthenticated
          ? <AuthorizedRouter key="authRouter" />
          : <GuestRouter key="guestRouter" />
      }
    </Router>
    <ReduxToastr
      key="tostr"
      newestOnTop
      preventDuplicates
      position="top-right"
      timeOut={3000}
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar={false}
    />
  </main>
);

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, null)(App);
