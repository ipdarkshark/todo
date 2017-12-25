import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const Button = ({ children, type='button', ...props }) => (
  <button {...props} className={classNames('btn', props.className)} type={type}>
    {children}
  </button>
);

export default Button;