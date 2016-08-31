import React from 'react';
import Actions from '../TodoActions.js';

export default class TodoForm extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    Actions.addTodo(this.state.text);
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} />
          <button type>Add Todo</button>
        </form>
      </div>
    );
  }
}
