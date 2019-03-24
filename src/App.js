import React, { Component } from "react";
import "./App.css";
import Todo_list from "./components/Todo_list";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ['di cho', 'nau com', 'rua bat']
    };
  }
  render() {
    return (
      <div className="App">
        <Todo_list title={ this.state } />
      </div>
    );
  }
}

export default App;
