// @flow
/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import React from 'react';
import {
  compose,
  onlyUpdateForPropTypes,
  pure,
  setPropTypes,
  withReducer,
  withPropsOnChange,
} from 'recompose';

import * as actions from '../actions';
import counterReducer from '../reducer';

const enhance = compose(
  pure,
  onlyUpdateForPropTypes,
  setPropTypes({
    counter: React.PropTypes.number,
    addOne: React.PropTypes.func,
    counterLog: React.PropTypes.func,
  }),
  withPropsOnChange(['counter'], ({ counter }) => ({ counter })),
  withReducer('counter', 'dispatch', counterReducer),
);

const Counter = enhance(({ counter, dispatch }) => (
  <div>
    <h1>Counter module</h1>
    <p>{counter}!!!</p>
    <button onClick={() => dispatch({ type: actions.addOne })}>Inc</button>
    <hr />
    <button onClick={() => dispatch({ type: actions.counterLog })}>Log Counter State</button>
  </div>
));

export default Counter;
