import React from 'react';
import style from './Feedback.module.css';

class Feedback extends React.Component {
  static defauitProps = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  static typePrors = {
    // 
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleIncrementGood = () => {
    this.setState({
      good: this.state.good + 1,
     })
  }
  
  handleIncrementNeutral = () => {
    this.setState({
      neutral: this.state.neutral + 1,
     })
  }
  
  handleIncrementBad = () => {
    this.setState({
      bad: this.state.bad + 1,
     })
   }
  
  render() {
    return (
      <div className={'Container'}>
        <div className={style.controls}>
          <button onClick={this.handleIncrementGood}>Good</button>
          <button onClick={this.handleIncrementNeutral}>Neutral</button>
          <button onClick={this.handleIncrementBad}>Bad</button>
        </div>
        
        <ul>
          <li className={style.value}>Good: <span>{this.state.good}</span></li>
          <li className={style.value}>Neutral: <span>{this.state.neutral}</span></li>
          <li className={style.value}>Bad: <span>{this.state.bad}</span></li>
        </ul>
      </div>
    )
  }
}
 
export default Feedback