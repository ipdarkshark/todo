import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as types from 'actions';
import Button from 'components/button';
import Icon from 'components/icon';

import './styles.scss';

class TodoItem extends Component {
  state = {
    editing: false,
  }

  startEdit = () => {
    this.setState({ editing: true });
  }

  stopEdit = () => {
    this.setState({ editing: false });
  }

  saveChanges = (event) => {
    const { task, editTodo } = this.props;
    const text = event.target.value.trim();
    if (text.length && task.title !== text) editTodo(task.id, text);
    this.stopEdit();
  }

  handleKeyUp = (event) => {
    if (event.keyCode === 13) this.saveChanges(event);
    if (event.keyCode === 27) this.stopEdit();
  }

  moveCaretAtEnd = (event) => {
    const temp_value = event.target.value;
    event.target.value = '';
    event.target.value = temp_value;
  }

  renderTask = task => (
    <div className="todo-item__task">
      {task.title}
    </div>
  )

  renderEditInput = task => (
    <input
      type="text"
      autoComplete="off"
      autoFocus
      className="todo-item__input"
      defaultValue={task.title}
      onKeyUp={event => this.handleKeyUp(event)}
      onFocus={this.moveCaretAtEnd}
    />
  )

  render() {
    const { task, deleteTodo, toggleTodo } = this.props;
    const { editing } = this.state;

    return (
      <li className={classNames('todo-item', { 'todo-item--completed': task.completed })}>
        <div className="todo-item__cell">
          <Button
            className={classNames('btn--icon', 'btn--checkbox', { hide: editing })}
            onClick={() => toggleTodo(task.id)}
          >
            <Icon name={task.completed ? 'check_box' : 'check_box_outline_blank'} />
          </Button>
        </div>

        <div className="todo-item__cell">
          {editing ? this.renderEditInput(task) : this.renderTask(task)}
        </div>

        <div className="todo-item__cell">
          {editing && <Button
            className={classNames('btn--icon')}
            onClick={this.stopEdit}
          >
            <Icon name="clear" />
          </Button>}
          {!editing && [
            <Button
              key={'start_edit'}
              className={classNames('btn--icon')}
              onClick={this.startEdit}
            >
              <Icon name="mode_edit" />
            </Button>,
            <Button
              key={'delete_item'}
              className={classNames('btn--icon')}
              onClick={() => deleteTodo(task.id)}
            >
              <Icon name="delete" />
            </Button>,
          ]}
        </div>
      </li>
    );
  }
}

export default connect(null, types)(TodoItem);
