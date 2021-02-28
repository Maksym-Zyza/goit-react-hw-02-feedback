import React from 'react';
import Controls from './_components/Controls';
import Statistics from "./_components/Statistics";
import Section from "./_components/Section";
import Notification from "./_components/Notification";
import './styles.css';


class App extends React.Component {

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
    const total = this.feedbackCounter();;

    return (
      <div className='Container'>
        
        <Section title="Please leave feedback">
          <Controls
            options={this.state}
            leaveFeedback={this.handlerFeedback}
          />
        </Section>

        <Section title="Statistic">
          {total === 0 && <Notification message="No feedback given" />}
          {total > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.positivePercentageCounter()}
            />
          )}
        </Section>
      </div>
    );
  }
};

export default App;