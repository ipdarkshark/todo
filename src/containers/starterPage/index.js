import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/button';

import 'styles/styles.scss';

const StarterPage = () => (
  <div className="starter">
      <Link to="/sign-in">
        <Button className="btn--starter">Sign in</Button>
      </Link>
      <Link to="/sign-up">
        <Button className="btn--starter">Sign up</Button>
      </Link>
  </div>
)

export default StarterPage;
