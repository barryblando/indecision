import React from 'react';

const Action = (props) => (
  <button
    className="big-button big-button--spacing"
    onClick={ props.handlePick }
    disabled={ !props.hasOptions }
  >
    What should I do?
  </button>
);

export default Action;