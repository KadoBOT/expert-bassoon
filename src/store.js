import { createStore, applyMiddleware } from 'redux';
import { run } from '@cycle/run';
import { createCycleMiddleware } from 'redux-cycles';

import main from './modules/counter/actions';
import rootReducer from './modules/rootReducer';

const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver } = cycleMiddleware;

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState, // the initial state if any
    applyMiddleware(cycleMiddleware),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/rootReducer', () => {
      const nextRootReducer = require('./modules/rootReducer').default; // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer);
    });
  }

  run(main, {
    ACTION: makeActionDriver(),
  });

  return store;
};

export default configureStore;
