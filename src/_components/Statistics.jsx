import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <li className='value'>Good: <span>{good}</span></li>
      <li className='value'>Neutral: <span>{neutral}</span></li>
      <li className='value'>Bad: <span>{bad}</span></li>
      <li className='value'>Total: <span>{total}</span></li>
      <li className='value'>Positive feedback: <span>{positivePercentage}%</span></li>
    </ul>  
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;