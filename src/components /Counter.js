import React, { Component } from "react";
import './Counter.css';

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
      <div className="Counter">
        <span className='Counter__value'>{this.state.value}</span>
        <div className='Counter__controls'>
          <button className="button" onClick={this.handleIncrement}>- 1</button>    
          <button className="button" onClick={this.handleDecrement}>+ 1</button>  
       </div>
      </div>
    );
  }
}

export default Counter;