import React from 'react';

// import TaskItem from 'components/todo-item';

import './styles.scss';

const TodoForm = () => {
  return (
    <form className="todo-form">
      <input
        type="text"
        autoComplete="off"
        placeholder="What needs to be done?"
      />
    </form>
  )
}

export default TodoForm;