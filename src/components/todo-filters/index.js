import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

import * as types from 'actions';
import Button from 'components/button';

const TodoFilters = ({ setVisibilityFilter, filter }) => {
  const setVisibilityHandler = (event, filter) => {
    event.preventDefault();
    setVisibilityFilter(filter);
  };

  return (
    <div className="todo-filters">
      <Button
        className={classNames('btn--filter', { active: filter === 'ALL' })}
        onClick={e => setVisibilityHandler(e, 'ALL')}
      >
        All
      </Button>
      <Button
        className={classNames('btn--filter', { active: filter === 'ACTIVE' })}
        onClick={e => setVisibilityHandler(e, 'ACTIVE')}
      >
        Active
      </Button>
      <Button
        className={classNames('btn--filter', { active: filter === 'COMPLETED' })}
        onClick={e => setVisibilityHandler(e, 'COMPLETED')}
      >
        Completed
      </Button>
    </div>
  );
};

const mapStateToProps = state => ({
  filter: state.visibilityFilter,
});

export default connect(mapStateToProps, { ...types })(TodoFilters);
