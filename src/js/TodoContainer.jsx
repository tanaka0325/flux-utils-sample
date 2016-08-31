import { Container } from 'flux/utils';
import React from 'react';

import TodoStore from './TodoStore';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class TodoApp extends React.Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState() {
    return { todos: TodoStore.getState() };
  }

  render() {
    return (
      <div>
        <TodoForm />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}

const TodoContainer = Container.create(TodoApp);
export default TodoContainer;
