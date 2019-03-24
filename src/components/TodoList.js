import React, { Component } from "react";

class TodoList extends Component {
  render() {
    return (
      <div className="todo_list">
        <ul>
          <li>{ this.props.title }</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
