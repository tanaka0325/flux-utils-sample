import { Container } from 'flux/utils';
import React from 'react';

import TodoStore from '../TodoStore';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

class _TodoContainer extends React.Component {
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

const TodoContainer = Container.create(_TodoContainer);
export default TodoContainer;
