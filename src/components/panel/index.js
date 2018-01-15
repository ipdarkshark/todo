import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const Panel = ({ children, className }) => (
  <div className={classNames('panel', className)}>
    {children}
  </div>
);

export default Panel;
