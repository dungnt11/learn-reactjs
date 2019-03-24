import React, { Component } from "react";
import './style.css'
const classNames = require('classnames')
class TodoList extends Component {
  render() {
    const {name, isComplete} = this.props.title
    const event = this.props.eventClick
    return (
      <div className="todo_list">
        <ul>
          <li onClick= {event} className={classNames({'active': isComplete})}>{ name }</li>
        </ul>
      </div>
    );
  }
}

export default TodoList;
