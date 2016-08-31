import React from 'react';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos,
    };
  }

  render() {
    const list = this.state.todos.map((todo, i) => <li key={i}>{todo.text}</li>);

    return (
      <ul>
        {list}
      </ul>
    );
  }
}
