import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from 'components/todo-item';
import { getAllTodos } from 'actions';

import './styles.scss';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'ALL':
      return todos;
    case 'ACTIVE':
      return todos.filter(todo => !todo.completed);
    case 'COMPLETED':
      return todos.filter(todo => todo.completed);
    default:
      throw new Error(`Unknown filter: ${filter}`);
  }
};

class TodoList extends Component {
  componentDidMount() {
    const { getAllTodos } = this.props;
    getAllTodos && getAllTodos();
  }

  render() {
    const { todoList } = this.props;

    const todos = todoList.map(todo => (<TodoItem
      key={todo.id}
      task={todo}
    />),
    );

    return (
      <ul className="todo-list">
        {todos}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  todoList: getVisibleTodos(state.addTodo, state.visibilityFilter),
});

export default connect(mapStateToProps, { getAllTodos })(TodoList);
