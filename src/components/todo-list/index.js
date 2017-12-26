import React from 'react';
import { connect } from 'react-redux';

import TodoItem from 'components/todo-item';

import './styles.scss';

const TodoList = ({ todoList }) => {
  const task = todoList.map(todo => <TodoItem 
    key={todo.id}
    task={todo}/>
  );

  return (
    <ul className="todo-list">
      {task}
    </ul>
  )
}

const mapStateToProps = state => ({
  todoList: state.addTodo,
 });
 
 export default connect(mapStateToProps)(TodoList);