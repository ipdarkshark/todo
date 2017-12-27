import React from 'react';
import { connect } from 'react-redux';

import TodoItem from 'components/todo-item';

import './styles.scss';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos
    case 'ACTIVE':
      return todos.filter(todo => !todo.completed)
    case 'COMPLETED':
      return todos.filter(todo => todo.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const TodoList = ({ todoList }) => {
  const todos = todoList.map(todo => <TodoItem 
    key={todo.id}
    task={todo}/>
  );

  return (
    <ul className="todo-list">
      {todos}
    </ul>
  )
}

const mapStateToProps = state => ({
  todoList: getVisibleTodos(state.addTodo, state.visibilityFilter),
});
 
export default connect(mapStateToProps)(TodoList);