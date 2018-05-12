import React from 'react';
import Option from './Option';

// Key should be specified inside the array.
// Implicitly return jsx without these {} & return
const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3>Your Options</h3>
      <button
        className="button button--link"
        onClick={ props.handleDeleteOptions /* call when Remove ALl button gets clicked & gonna wipe the state */ }
      >
        Remove All
      </button>
    </div>
    { props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p> }
    {
      props.options.map((option, index) => (
        <Option
          key={ option }
          optionText={ option }
          count={ index + 1 }
          handleDeleteOption={ props.handleDeleteOption }
          highlightedOption={ props.highlightedOption }
        />
      ))
    }
  </div>
);

export default Options;