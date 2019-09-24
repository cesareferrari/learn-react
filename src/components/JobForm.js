import React from 'react';

class JobForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: ''
    }
  }

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.props.addJob(this.state);
      }}>

        <input
          type="text"
          name="name"
          value={this.state.name}
          placeholder="Job name"
          onChange={this.changeHandler}
        />

        <input
          type="text"
          name="description"
          value={this.state.description}
          placeholder="Description"
          onChange={this.changeHandler}
        />

        <button>Add job</button>
      </form>
    )
  }
}

export default JobForm;
