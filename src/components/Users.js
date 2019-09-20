import React from 'react';
import User from './User.js';

class Users extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [
        { name: 'Estelle' },
        { name: 'Mary' }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Users</h1>

        { this.state.users.map(user => <User user={user} />) }
      </div>
    )
  }
}

export default Users;
