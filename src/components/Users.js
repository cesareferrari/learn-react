import React from 'react';
import User from './User.js';
import UserForm from './UserForm.js';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { id: 1, name: 'Estelle', email: 'estelle@example.com' },
        { id: 2, name: 'Mary', email: 'mary@example.com' }
      ]
    }
  }

  addUser = user => {
    let newUser = user;
    user.id = Date.now();

    this.setState({
      users: [...this.state.users, newUser]
    })
  }

  render() {
    return (
      <div className="user-list">
        <h1>Users</h1>

        { this.state.users.map(user => <User user={user} key={user.id} />) }

        <UserForm addUser={this.addUser} />
      </div>
    )
  }
}

export default Users;
