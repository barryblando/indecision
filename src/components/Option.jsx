import React from 'react';

// Pass optionText to IndecisionApp handleDeleteOption
const Option = (props) => (
  <div
    className={ props.optionText === props.selectedOpt ? "option option--highlighted" : "option" }
  >
    <p className="option__text">
      { props.count }. { props.optionText }
    </p>
    <button
      className="button button--link"
      onClick={ (e) => {
        return props.selectedOpt ? props.handleDeleteOption(props.optionText, props.selectedOpt) : props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;