import React, { Component } from "react";

class Todo_list extends Component {
  render() {
    const { name } = this.props.title
    return (
      <div className="todo_list">
        <ul>
          <li>{ name }</li>
        </ul>
      </div>
    );
  }
}

export default Todo_list;
