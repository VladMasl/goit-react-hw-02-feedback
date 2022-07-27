import { Component } from 'react';
import s from './Feedback.module.css';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedbackGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  handleFeedbackNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  handleFeedbackBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let percentage = this.state.good / this.countTotalFeedback()  * 100
    return Math.round( percentage);
  };

  render() {
    return (
      <div className={s.container}>
        <h1 className={s.title}>Please leave feedback</h1>
        <div>
          <button
            onClick={this.handleFeedbackGood}
            className={s.statisticsBtn}
            type="button"
          >
            Good
          </button>
          <button
            onClick={this.handleFeedbackNeutral}
            className={s.statisticsBtn}
            type="button"
          >
            Neutral
          </button>
          <button
            onClick={this.handleFeedbackBad}
            className={s.statisticsBtn}
            type="button"
          >
            Bad
          </button>
        </div>
        <h2 className={s.titleStatistics}>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;
