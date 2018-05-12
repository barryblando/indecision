import React from 'react';

// Pass optionText to IndecisionApp handleDeleteOption
const Option = (props) => (
  <div
    className={ props.optionText === props.highlightedOption ? "option option--highlighted" : "option" }
  >
    <p className="option__text">
      { props.count }. { props.optionText }
    </p>
    <button
      className="button button--link"
      onClick={ (e) => {
        const selectedOpt = props.highlightedOption;
        // if option to remove is highlighted option ? wipe both option & highlighted option : just delete the option w/ no highlighted class
        return selectedOpt ? props.handleDeleteOption(props.optionText, selectedOpt) : props.handleDeleteOption(props.optionText);
      }}
    >
      remove
    </button>
  </div>
);

export default Option;