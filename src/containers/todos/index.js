import React from 'react';
import { connect } from 'react-redux';

import TodoForm from 'components/todo-form';
import TodoList from 'components/todo-list';
import TodoFilters from 'components/todo-filters';
import { signOut, deleteAllTodos } from 'actions';
import { headers } from 'api';

import 'styles/styles.scss';

const Todos = ({ signOut, deleteAllTodos }) => {
  const signOutHandler = (event) => {
    event.preventDefault();
    headers.delete('Authorization');
    localStorage.removeItem('jwtToken');
    signOut();
    deleteAllTodos();
  };

  return (
    <div className="app">
      <div className="header">
        <a href="#" onClick={signOutHandler}>Sign out</a>
      </div>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </div>
  );
};

export default connect(null, { signOut, deleteAllTodos })(Todos);
