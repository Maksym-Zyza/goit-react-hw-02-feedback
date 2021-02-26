import React, { Component } from "react";
import Controls from "./Controls";
import style from "./Counter.module.css";

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propsTypes = {
    // 
  }

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevStete => ({
      value: prevStete.value - 1,
    }))
  };

  handleDecrement = () => {
    this.setState({
      value: this.state.value + 1,
    })
  };

  render() {
    return (
      <div className="Container">
        <span className={style.value}>{this.state.value}</span>
        <Controls
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}
        />
      </div>
    );
  }
}

export default Counter;

