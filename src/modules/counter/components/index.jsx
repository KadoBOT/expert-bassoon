/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  compose,
  onlyUpdateForPropTypes,
  pure,
  setPropTypes,
  withPropsOnChange,
} from 'recompose';

import * as actions from '../actions';

const enhance = compose(
  pure,
  onlyUpdateForPropTypes,
  setPropTypes({
    counter: React.PropTypes.number,
  }),
  withPropsOnChange(['counter'], ({ counter }) => ({ counter })),
);

const Counter = enhance(({ counter, increment, decrement }) => (
  <div>
    <h1>Counter module</h1>
    <p>{counter}</p>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
));

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => bindActionCreators({
  increment: actions.addOne$,
  decrement: actions.removeOne$,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
