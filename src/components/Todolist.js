import React, { Component } from "react";
import "./style.css";
const classNames = require("classnames");

class Todolist extends Component {
  render() {
    const { ds } = this.props;
    let statusClass = classNames({ todo_list_done: ds.isComplete });
    return (
      <div className={statusClass}>
        <ul>
          <li>{ds.title}</li>
        </ul>
      </div>
    );
  }
}

export default Todolist;
