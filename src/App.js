import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todolist from "./components/Todolist";

class App extends Component {
  constructor() {
    super();
    this.congViec = [
      {title: 'di cho', isComplete: true},
      {title: 'nau com', isComplete: true},
      {title: 'giat quan ao', isComplete: false}
    ];
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          { this.congViec.map((e, i) => <Todolist key = { i } ds = { e }/>) }
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
