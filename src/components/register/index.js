import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import Input from 'components/input';
import Button from 'components/button';

import './styles.scss';

const Register = props => {
  const { handleSubmit, reset } = props;
  return (
    <form className="author-form" onSubmit={handleSubmit}>
      <h2 className="author-form__title">Sign up</h2>
      <Field
        name="firstname"
        type="text"
        component={Input}
        label="First name"
        autoComplete="off"
      />
      <Field
        name="lastname"
        type="text"
        component={Input}
        label="Last name"
        autoComplete="off"
      />
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
          Register
        </Button>
        <Button className="author-form__button author-form__button--cancel">
          Cancel
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'signUP', // a unique identifier for this form
  // validate, // <--- validation function given to redux-form
  // warn // <--- warning function given to redux-form
})(Register)