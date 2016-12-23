import { createReducer } from 'redux-act'

import * as actions from '../actions'

export default createReducer({
  [actions.increment]: (state) => state + 1,
  [actions.decrement]: (state) => state - 1
}, 0)
