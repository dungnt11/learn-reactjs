import React, { Component } from "react";
import "./App.css";
import DenGiaoThong from "./components/DenGiaoThong";

const BLUE = 0,
  RED = 1,
  YELLOW = 2;
class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: BLUE
    };
    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
  }
  getNextColor(color) {
    switch (color) {
      case BLUE:
        return RED;
      case RED:
        return YELLOW;
      default:
        return BLUE;
    }
  }
  changeColor() {
    this.setState({
      currentColor: RED
    });
    console.log("clicked !");
  }
  render() {
    return (
      <div className="App">
        <DenGiaoThong
          onClick={this.changeColor.bind(this)}
          currentColor={this.state.currentColor}
        />
      </div>
    );
  }
}

export default App;
