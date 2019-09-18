import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <form onSubmit={e => {
        e.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({todo: ''});
      }}>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          placeholder="New Todo"
          onChange={this.handleChange}
        />

      <button>Add</button>
      </form>
    )
  }
}

export default TodoForm;
