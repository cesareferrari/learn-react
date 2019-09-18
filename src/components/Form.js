import React from 'react';


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      item: ""
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitItem = event => {
    event.preventDefault();
    this.setState({item: ''});
    this.props.addItem(event, this.state.item);
  }

  render() {
    return (
      <form onSubmit={this.submitItem}>
        <input
          type="text"
          value={this.state.item}
          name="item"
          onChange={this.handleChange}
        />
        
        <button>Add</button>
      </form>
    )
  }
}

export default Form;
