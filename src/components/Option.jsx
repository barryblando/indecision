import React from 'react';

// Pass optionText to IndecisionApp handleDeleteOption
const Option = (props) => (
  <div>
    { props.optionText } { props.optionText === props.selectedOpt ? <span>- Selected Work </span> : '' }
    <button
      onClick={ (e) => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;