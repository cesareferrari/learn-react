import React from 'react';
import TodoItem from './TodoItem';

const todos = [
  {
    id: 1,
    name: "Paint my room",
    done: false
  },
  {
    id: 2,
    name: "Repair computer",
    done: false
  },
  {
    id: 3,
    name: "Go to the mall",
    done: false
  },
  {
    id: 4,
    name: "Take out garbage",
    done: false
  },
]


class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        {this.state.todos.map(todo => <TodoItem todo={todo} key={todo.id} />)}
      </div>
    )
  }
}

export default TodoList;
