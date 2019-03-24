import "./style.css";
import React, { Component } from "react";
const classNames = require('classnames')

const BLUE = 0,
  RED = 1,
  YELLOW = 2;

class DenGiaoThong extends Component {
  render() {
    const { currentColor, onClick } = this.props
    return (
      <div onClick={onClick} className="cotden">
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
