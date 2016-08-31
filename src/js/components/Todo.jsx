import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          text: 'web+db press',
          completed: true,
        },
        {
          text: 'ゴミすて',
          completed: false,
        },
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(text) {
    const addTodo = {
      text,
      completed: false,
    };

    const todos = this.state.todos;
    todos.push(addTodo);
    this.setState(todos);
  }

  render() {
    return (
      <div>
        <TodoForm handleSubmit={this.handleSubmit} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
