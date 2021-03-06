import "./style.css";
import React, { Component } from "react";
const classNames = require('classnames')

const BLUE = 0,
  RED = 1,
  YELLOW = 2;

class DenGiaoThong extends Component {
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
  render() {
    const { currentColor } = this.state
    return (
      <div className="cotden">
        <div className={ classNames('denxanh', {
          'active': currentColor === BLUE
        }) } />
        <div className={ classNames('denvang', {
          'active': currentColor === YELLOW
        }) } />
        <div className={ classNames('dendo', {
          'active': currentColor === RED
        }) } />
      </div>
    );
  }
}

export default DenGiaoThong;
