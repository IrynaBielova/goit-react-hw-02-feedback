import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions'
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import {Section} from './Section';
import styles from '../styles/styles.module.css';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedback = () => {
    const { good } = this.state;
    return Math.floor((good / this.countTotalFeedback()) * 100);
  };

  onLeaveFeedback = name => {
    this.setState(state => ({
      [name]: state[name] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    // const percent = this.countPositiveFeedback();
    
    return(
      <div>
        <Section title="Please leave feedback">
        <FeedbackOptions 
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          </Section>

          <Section title="Statistics">
            {!total 
            ? (<Notification message={`There is no feedback`} />)
            : ( <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percent={this.countPositiveFeedback()}
            />)}
              </Section>
      </div>
    )
  }
}  

export default styles;