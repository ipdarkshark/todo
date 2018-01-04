import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import Input from 'components/input';
import Button from 'components/button';
import Panel from 'components/panel';

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

export default reduxForm({
  form: 'signIN', // a unique identifier for this form
  // validate, // <--- validation function given to redux-form
  // warn // <--- warning function given to redux-form
})(SignIN)