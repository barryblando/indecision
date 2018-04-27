import React from 'react';

const Option = (props) => {
  // Pass optionText to IndecisionApp handleDeleteOption
  return (
    <div>
      { props.optionText }
      <button
        onClick={ (e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
};

export default Option;