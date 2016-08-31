import React from 'react';

export default class TodoForm extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input ref={node => { this.input = node }} />
          <button type>Add Todo</button>
        </form>
      </div>
    );
  }
}
