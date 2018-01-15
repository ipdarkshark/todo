import React from 'react';
import classNames from 'classnames';

// import './styles.scss';

const Icon = ({ name, ...props }) => (
  <span className={classNames('material-icons', props.className)}>
    {name}
  </span>
);

export default Icon;
