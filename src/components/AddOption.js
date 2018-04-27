import React from 'react';

class AddOption extends React.Component {
  // transform-class-properties
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault(); // prevent form default submission process
    const option = e.target.elements.option.value.trim(); // input name option & value, and trim white spaces
    // return this.props.options.includes(option) ? alert('EXIST!') : alert('!EXIST!');
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
        { this.state.error && <p>{ this.state.error }</p> }
        <form onSubmit={ this.handleAddOption }>
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

export default AddOption;