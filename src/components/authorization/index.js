import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Input from 'components/input';
import Button from 'components/button';

const Authorization = props => {
  const { handleSubmit, reset } = props;
  return (
    <form className="author-form" onSubmit={handleSubmit}>
      <h2 className="author-form__title">Sign in</h2>
      <Field
        name="username"
        type="text"
        component={Input}
        label="Username"
        autoComplete="off"
      />
      <Field
        name="password"
        type="password"
        component={Input}
        label="Password"
      />
      <div className="author-form__buttons">
        <Button className="author-form__button author-form__button--submit">
          Login
        </Button>
        <Button className="author-form__button author-form__button--cancel">
          Register
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signIN', // a unique identifier for this form
  // validate, // <--- validation function given to redux-form
  // warn // <--- warning function given to redux-form
})(Authorization)