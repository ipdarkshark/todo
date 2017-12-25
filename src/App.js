import React from 'react';
import { connect } from 'react-redux';

const App = ({ title }) => (
  <div className="app">
    <h1>hello world {title}</h1>
  </div>);

const mapStateToProps = ({ title }) => ({ title });

export default connect(mapStateToProps)(App);
