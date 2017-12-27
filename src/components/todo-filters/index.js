import React from 'react';
import { connect } from 'react-redux';

import * as types from 'actions';

import './styles.scss';

const TodoFilters = ({ setVisibilityFilter }) => (
  <ul className="todo-filters">
    <li>
      <a href="#" onClick = {() => setVisibilityFilter('ALL')}>View All</a>
    </li>
    <li>
      <a href="#" onClick = {() => setVisibilityFilter('ACTIVE')}>Active</a>
    </li>
    <li>
      <a href="#" onClick = {() => setVisibilityFilter('COMPLETED')}>Completed</a>
    </li>
  </ul>
);



export default connect(null, {...types})(TodoFilters);