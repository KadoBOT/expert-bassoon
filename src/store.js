import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './modules/rootReducer'

const configureStore = (preloadedState) => {
  const store = createStore(
    rootReducer,
    preloadedState, //the initial state if any
    applyMiddleware(thunk)
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./modules/rootReducer', () => {
      const nextRootReducer = require('./modules/rootReducer').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
