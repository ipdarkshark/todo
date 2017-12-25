import React from 'react';

import TodoItem from 'components/todo-item';
import todos from 'todos';

import './styles.scss';

const TodoList = () => {
  const task = todos.map(todo => <TodoItem 
    key={todo.id}
    task={todo}
  />);

  return (
    <ul className="todo-list">
      {task}
    </ul>
  )
}

export default TodoList;

