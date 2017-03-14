/* eslint no-console: ["error", { allow: ["warn", "error"] }] */
/* eslint immutable/no-mutation: 0 */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../actions';

const Counter = ({ counter, increment, decrement }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
  increment: actions.addOne$,
  decrement: actions.removeOne$,
}, dispatch);

Counter.propTypes = {
  counter: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func.isRequired,
  decrement: React.PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
