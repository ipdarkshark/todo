import React from 'react';
import { Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ReduxToastr from 'react-redux-toastr'

import StarterPage from 'containers/starterPage';
import SignIN from 'containers/sign-in';
import SignUP from 'containers/sign-up';
import Todos from 'containers/todos';
import PrivateRoute from 'components/privateRoute';
import history from 'utils/history';
import { signOut } from 'actions';

import './styles/styles.scss';

const App = ({isAuthenticated, signOut}) => {

  const signOutHandler = event => {
    event.preventDefault();
    localStorage.removeItem('jwtToken');
    signOut();
  }

  return (
    <div>
      {
        isAuthenticated && <header className="header">
          <a href="#" onClick={signOutHandler}>Sign out</a>
        </header>
      }
      <main className="main">
        <Router history={history}>
          <div>
            <Route exact path='/' component={StarterPage}/>
            <Route exact path='/sign-in' component={SignIN}/>
            <Route path='/sign-up' component={SignUP}/>
            <PrivateRoute path="/todos" component={Todos} auth={isAuthenticated} />
          </div>
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
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { signOut })(App);
