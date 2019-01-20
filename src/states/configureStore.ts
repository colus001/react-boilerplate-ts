// @flow
import { compose, createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

// import rootEpic from 'states/epics'
import rootReducer from 'states/reducers';

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware)),
  )

  // epicMiddleware.run(rootEpic)

  return store
}

export default configureStore
