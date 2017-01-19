import { combineReducers } from 'redux';
import counter from './counter';

export default combineReducers({
  [counter.constants.NAME]: counter.reducer,
});
