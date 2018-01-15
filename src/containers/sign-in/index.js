import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from 'components/input';
import Button from 'components/button';
import Panel from 'components/panel';
import { signInRequest } from 'actions';

const validate = (values) => {
  const errors = {};

  if (!values.username) errors.username = 'Required';

  if (!values.password) errors.password = 'Required';
  else if (values.password.length < 3) errors.password = 'Must be 3 characters or more';

  return errors;
};

const SignIN = (props) => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Panel>Sign in</Panel>
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
      <Panel className="panel--bottom">
        <Button className="btn--auth btn--submit" type="submit">
          Sign in
        </Button>
        <Link to="/">
          <Button className="btn--auth btn--cancel">
            Cancel
          </Button>
        </Link>
      </Panel>
    </form>
  );
};

export default reduxForm({
  form: 'signUP',
  validate,
  onSubmit: (values, dispatch) => {
    dispatch(signInRequest(values));
  },
})(SignIN);
