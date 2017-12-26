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
    this.setState({editing: true});
  }

  stopEdit = () => {
    this.setState({editing: false});
  }

  renderTask = task => (
    <div className="todo-item__task">
      {task.title}
    </div>
  )

  renderEditInput = task => (
    <input
      autoComplete="off"
      className="todo-item__input"
      defaultValue={task.title}
      type="text"
    />
  )

  render() {
    const { task, deleteTodo } = this.props;
    const { editing } = this.state;

    return (
      <li className={classNames("todo-item", {"todo-item--completed": task.completed})}>
        <div className="todo-item__cell">
          <Button className={classNames("btn--icon", "btn--checkbox", {'hide': editing})}>
            <Icon name={task.completed ? "check_box" : "check_box_outline_blank"} />
          </Button>
        </div>

        <div className="todo-item__cell">
          {editing ? this.renderEditInput(task) : this.renderTask(task)}
        </div>

        <div className="todo-item__cell">
          <Button 
            className={classNames("btn--icon", {'hide': editing})}
            onClick={this.startEdit}>
            <Icon name="mode_edit" />
          </Button>
          <Button 
            className={classNames("btn--icon", {'hide': !editing})}
            onClick={this.stopEdit}>
            <Icon name="clear" />
          </Button>
          <Button 
            className={classNames("btn--icon", {'hide': editing})}
            onClick={() => deleteTodo(task.id)}>
            <Icon name="delete" />
          </Button>
        </div>
      </li>
    )
  }
}

export default connect(null, {...types})(TodoItem);