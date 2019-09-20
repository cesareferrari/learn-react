import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialUser = {
      id: '',
      name: '',
      email: ''
    }

    this.state = this.initialUser;
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clearForm = e => {
    let formElements = [...e.target.elements];
    this.setState(this.initialUser);
    formElements.forEach(element => element.blur());
  }

  render() {
    return (
      <div>

      <form onSubmit={e => {
        e.preventDefault();
        this.props.addUser(this.state);
        this.clearForm(e);
      }}>

      <input
        type="text"
        name="name"
        value={this.state.name}
        placeholder="Name"
        onChange={this.handleChange}
      />

      <input
        type="text"
        name="email"
        value={this.state.email}
        placeholder="Email"
        onChange={this.handleChange}
      />

      <button>Add user</button>
      </form>

      </div>
    )
  }
}

export default UserForm;
