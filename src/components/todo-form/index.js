import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as types from 'actions';

import './styles.scss';

class TodoForm extends Component {
  state = {
    text: '',
  }

  clearInput = () => {
    this.setState({text: ''});
  }

  handleChange = event => {
    this.setState({text: event.target.value});
  }

  handleKeyUp = event => {
    if (event.keyCode === 27) this.clearInput();
  }

  handleSubmit = event => {
    event.preventDefault();
    const text = this.state.text.trim();
    if (text.length) this.props.addTodo(text);
    this.clearInput();
  }

  render = () => (
    <form className="todo-form" onSubmit={event => this.handleSubmit(event)}>
      <input
        type = "text"
        autoComplete = "off"
        placeholder = "What needs to be done?"
        onChange = {event => this.handleChange(event)}
        onKeyUp = {event => this.handleKeyUp(event)}
        value = {this.state.text}
      />
    </form>
  )
}
 
export default connect(null, {...types})(TodoForm);