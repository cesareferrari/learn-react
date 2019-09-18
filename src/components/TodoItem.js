import React from 'react';

const TodoItem = props => {
  return (
    <div className={`todo-item${props.todo.done ? ' done' : ''}`}
      onClick={e => props.toggleTodo(e, props.todo.id) }
    >
    {props.todo.name}
    </div>
  )
}

export default TodoItem;
