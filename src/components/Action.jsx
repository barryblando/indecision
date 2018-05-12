import React from 'react';

const Action = (props) => (
  <button
    className="big-button big-button--spacing"
    onClick={ props.handlePick }
    disabled={ !props.hasOptions /* flip logic, if hasOptions = true then set to false (vice-versa) */}
  >
    What should I do?
  </button>
);

export default Action;