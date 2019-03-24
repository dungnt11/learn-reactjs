import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      congViec: [
        { name: "di cho", isComplete: false },
        { name: "nau com", isComplete: false },
        { name: "rua bat", isComplete: false }
      ]
    };
  }
  changeStatus(el) {
    return () => {
      let status = el.isComplete;
      let job = [...this.state.congViec];
      job.map(e => e.name === el.name && (e.isComplete = !status));
      this.setState({
        congViec: job
      })
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.congViec.map((e, i) => (
          <TodoList key={i} eventClick={this.changeStatus(e)} title={e} />
        ))}
      </div>
    );
  }
}

export default App;
