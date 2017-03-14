/* eslint no-console: ["error", { allow: ["warn", "error"] }] */

import { createReducer } from 'redux-act';

import * as actions from './actions';

const initialState = 0;

export default createReducer({
  [actions.addOne]: state => state + 1,
  [actions.removeOne]: state => state - 1,
}, initialState);

