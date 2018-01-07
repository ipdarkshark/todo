import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from 'components/input';
import Button from 'components/button';
import Panel from 'components/panel';

const validate = values => {
  const errors = {};

  if (!values.firstname) errors.firstname = 'Required';

  if (!values.lastname) errors.lastname = 'Required';

  if (!values.username) errors.username = 'Required';

  if (!values.password) errors.password = 'Required';
  else if (values.password.length < 3) errors.password = 'Must be 3 characters or more';

  return errors;
}

const SignUP = props => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Panel>Sign up</Panel>
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
      <Panel className="panel--bottom">
        <Button className="btn--auth btn--submit">
          Sign up
        </Button>
        <Link to="/">
          <Button className="btn--auth btn--cancel">
            Cancel
          </Button>
        </Link>
      </Panel>
    </form>
  )
}

const wrappedSignUpForm = reduxForm({
  form: 'signUP',
  validate,
})(SignUP);

export default connect(null, null)(wrappedSignUpForm);

