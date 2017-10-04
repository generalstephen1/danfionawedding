import React from "react";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from '../state/actions';

import CountdownDisplay from '../components/CountdownDisplay'

class Countdown extends React.Component {

  state = {
    timerIsRunning: false,
    timerStarted: false
  }

  componentWillMount = () => {
    this.props.setWeddingDate();

    if (!this.state.timerStarted){
      this.startUpdateLoop();
    }

    this.setState({'timerStarted': true});
  }

  componentDidmount = () => {
    this.setState({'timerIsRunning': true });
  }

  componentWillUnmount = () => {
    this.setState({'timerIsRunning': false});
  }

  startUpdateLoop = () => {
    setInterval(() => {
      if (!this.state.timerIsRunning) {
        this.props.updateTimer()
      }
    }, 1000);
  }

  humanReadableDates = (timestamp) => {
    return {
      days:     Math.floor(timestamp / (1000 * 60 * 60 * 24)),
      hours:    Math.floor((timestamp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      mins:     Math.floor((timestamp % (1000 * 60 * 60)) / (1000 * 60)),
      secs:     Math.floor((timestamp % (1000 * 60)) / (1000)),
    }
  }

  render = () => {
    const {days, hours, mins, secs} = this.humanReadableDates(this.props.timeUntilWedding);
    return (
      <div className="countdown">
        <CountdownDisplay
          days={days}
          hours={hours}
          minutes={mins}
          seconds={secs} />
      </div>
    );
  }
}

const mapStateToProps = ({ timeUntilWedding, weddingDate }) => {
  return { timeUntilWedding, weddingDate }
}

const mapDispatchToProps = (dispatch) => {
  const containerActions = {
    increment: actions.incrementAction,
    setWeddingDate: actions.setWeddingDateAction,
    updateTimer: actions.updateTimerAction
  }
  const actionMap = bindActionCreators(containerActions, dispatch);
  return actionMap;
}

const ConnectedCountdown = connect(mapStateToProps, mapDispatchToProps)(Countdown)
export default ConnectedCountdown;
