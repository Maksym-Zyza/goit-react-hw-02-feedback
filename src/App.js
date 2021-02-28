import React from 'react';
import PropTypes from 'prop-types';
import Controls from './_components/Controls';
import './styles.css';


class App extends React.Component {
  
  static defauitProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  static typePrors = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  handlerFeedback = (e) => {
    this.setState(prevState => {
      const btnId = e.target.id;
      return { [btnId]: prevState[btnId] + 1 };
     })
  }

  feedbackCounter = () =>
    Object.values(this.state).reduce((acc, value) => acc + value, 0);
  
  positivePercentageCounter = () => {
    return Math.round((100 / this.feedbackCounter()) * this.state.good);
  };


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.feedbackCounter();
    const positivePercentage = this.positivePercentageCounter();

    return (
      <div className={'Container'}>
        <h1>Please leave feedback</h1>  
        <Controls
          options={this.state}
          leaveFeedback={this.handlerFeedback}
        />

        <h2>Statistics</h2>
        {total === 0 && <p>No feedback given</p>}
        {total > 0 && (
        <ul>
          <li className='value'>Good: <span>{good}</span></li>
          <li className='value'>Neutral: <span>{neutral}</span></li>
          <li className='value'>Bad: <span>{bad}</span></li>
          <li className='value'>Total: <span>{total}</span></li>
          <li className='value'>Positive feedback: <span>{positivePercentage}%</span></li>
        </ul>
        )}
      </div>
  );
   }
};

export default App;