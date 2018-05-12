import React, { Component } from 'react';

class AddOption extends Component {
  // transform-class-properties
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault(); // prevent form default submission process
    const option = e.target.elements.option.value.trim(); // input name option & value, and trim white spaces
    // call IndecisionApp handleAddOption & pass option
    const error = this.props.handleAddOption(option);
    // using shorthand set object state if something happen in handleAddOption from Indecision
    this.setState(() => ({ error })); // error: error
    if (!error) {
      e.target.elements.option.value = ''
    }
  }

  render() {
    return (
      <div>
        { this.state.error && <p className="add-option-error">{ this.state.error }</p> }
        <form className="add-option" onSubmit={ this.handleAddOption }>
          <input className="add-option__input" type="text" name="option"/>
          <button className="button">Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;