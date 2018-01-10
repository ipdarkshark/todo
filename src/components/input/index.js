import React, { Component } from 'react';
import classNames from 'classnames';

import './styles.scss';

class Input extends Component {
  state = {
    isFocused: false,
    isFilled: false
  }

  handleFocus = () => this.setState({ isFocused: true });


  handleBlur = e => {
    const { input } = this.props;
    const value = e.target.value.trim().length;

    this.setState({ isFocused: false });
    if (value) this.setState({ isFilled: true });
    else this.setState({ isFilled: false });

    input.onBlur(e)
  }

  render = () => {
    const {input, label, type, meta: { touched, error }, autoComplete} = this.props;
    const {isFocused, isFilled} = this.state;

    return (
      <div className={classNames("author-form__field", { "is-focused": isFilled || isFocused })}>
        <label>{label}</label>
        <input 
          {...input}
          type={type}
          autoComplete={autoComplete}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
        { touched && error && <span className="error">{error}</span> }
      </div>
    )
  }
}

export default Input;