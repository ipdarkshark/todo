import React from 'react';

import TodoForm from 'components/todo-form';
import TodoList from 'components/todo-list';
import TodoFilters from 'components/todo-filters';

import 'styles/styles.scss';

const Todos = () => (
  <div className="app">
    <TodoForm />
    <TodoFilters />
    <TodoList />
  </div>
)

export default Todos;