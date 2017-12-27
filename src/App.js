import React, { Component } from 'react';

import TodoForm from './components/todo-form';
import TodoList from './components/todo-list';
import TodoFilters from './components/todo-filters';

import './styles/styles.scss';

const App = () => (
  <div className="app">
    <TodoForm />
    <TodoFilters />
    <TodoList />
  </div>
)

export default App;
