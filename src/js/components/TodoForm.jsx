import React from 'react';
import Actions from '../TodoActions.js';

export default class TodoForm extends React.Component {
  constructor() {
    super();

    this._onSubmit = this._onSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _onSubmit(e) {
    e.preventDefault();
    Actions.addTodo(this.state.text);
  }

  _onChange(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div>
        <form onSubmit={this._onSubmit}>
          <input onChange={this._onChange} />
          <button type>Add Todo</button>
        </form>
      </div>
    );
  }
}
