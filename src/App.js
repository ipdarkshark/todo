import React, { Component } from 'react';

import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import TodoFilters from './components/todo-filters';

import './styles/styles.scss';

export class App extends Component {
  render() {
    return (
      <div className="app">
        <TodoForm />
        <TodoFilters />
        <TodoList />
      </div>
    )
  }
}

export default App;

// import React from 'react';
// import { connect } from 'react-redux';

// const App = ({ title }) => (
//   <div className="app">
//     <h1>hello world {title}</h1>
//   </div>);

// const mapStateToProps = ({ title }) => ({ title });

// export default connect(mapStateToProps)(App);
