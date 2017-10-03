import React from "react";
import { bindActionCreators } from 'redux';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as actions from '../state/actions';

const Counter = ({ count, increment }) => (
  <div className="counter">
    <p>Current Count: {count}</p>
    <button onClick={increment}>Increment</button>
  </div>
)

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = (dispatch) => {
  const containerActions = {
    increment: actions.incrementAction
  }
  const actionMap = bindActionCreators(containerActions, dispatch);
  return actionMap;
}

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default ConnectedCounter;
