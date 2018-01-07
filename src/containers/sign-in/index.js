import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from 'components/input';
import Button from 'components/button';
import Panel from 'components/panel';

const validate = values => {
  const errors = {};

  if (!values.username) errors.username = 'Required';

  if (!values.password) errors.password = 'Required';
  else if (values.password.length < 3) errors.password = 'Must be 3 characters or more';

  return errors;
}

const SignIN = props => {
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
        <Button className="btn--auth btn--submit">
          Sign in
        </Button>
        <Link to="/sign-up">
          <Button className="btn--auth btn--cancel">
            Sign up
          </Button>
        </Link>
      </Panel>
    </form>
  )
}

const wrappedSignInForm = reduxForm({
  form: 'signUP',
  validate,
})(SignIN);

export default connect(null, null)(wrappedSignInForm);