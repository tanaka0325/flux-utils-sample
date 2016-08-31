import React from 'react';

export default function TodoList(props) {
  const { todos } = props;
  const list = todos.map((todo, i) => <li key={i}>{todo.text}</li>);

  return (
    <ul>
      {list}
    </ul>
  );
}
