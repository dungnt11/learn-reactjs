import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ["di cho", "nau com", "rua bat"]
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.name.map((e,i) => 
          <TodoList key={i} title={e} />
        )}
      </div>
    );
  }
}

export default App;
