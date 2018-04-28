import React from 'react';
import Option from './Option';

// Key should be specified inside the array.
// Implicitly return jsx without these {} & return
const Options = (props) => (
  <div>
    <button onClick={ props.handleDeleteOptions }>Remove All</button>
    { props.options.length === 0 && <p>Please add an option to get started!</p> }
    {
      props.options.map(option => (
        <Option
           key={ option }
          optionText={ option }
          handleDeleteOption={ props.handleDeleteOption }
          selectedOpt={ props.selectedOption }
        />
      ))
    }
  </div>
);


export default Options;