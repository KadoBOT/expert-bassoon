import { createReducer } from 'redux-act';

import * as actions from './actions';

const initialState = 0;

export default createReducer({
  [actions.counterLog]: (state) => { console.log(state); return state; },
  [actions.addOne]: state => state + 1,
}, initialState);
