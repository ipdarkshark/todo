import React from 'react';
import { connect } from 'react-redux';

import TodoForm from 'components/todo-form';
import TodoList from 'components/todo-list';
import TodoFilters from 'components/todo-filters';
import { signOut } from 'actions';
import { headers } from 'api';

import 'styles/styles.scss';

const Todos = ({signOut}) => {
  const signOutHandler = event => {
    event.preventDefault();
    headers.delete('Authorization')
    localStorage.removeItem('jwtToken');
    signOut();
  }

  return (
    <div className="app">
      <header className="header">
        <a href="#" onClick={signOutHandler}>Sign out</a>
      </header>
      <TodoForm />
      <TodoFilters />
      <TodoList />
    </div>
  )
}

export default connect(null, { signOut })(Todos);