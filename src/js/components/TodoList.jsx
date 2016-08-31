import React from 'react';

export default class TodoList extends React.Component {
  render() {
    const list = this.props.todos.map((todo, i) => <li key={i}>{todo.text}</li>);

    return (
      <ul>
        {list}
      </ul>
    );
  }
}
