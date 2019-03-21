import React, { Component } from "react";

class Todo_list extends Component {
  render() {
    return (
      <div className="todo_list">
        <ul>
          <li>Di cho</li>
          <li>{ this.props.title }</li>
        </ul>
      </div>
    );
  }
}

export default Todo_list;
