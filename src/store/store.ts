import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger({
  duration: true,
  timestamp: true,
});

export const store = createStore(reducers, {}, applyMiddleware(thunk, logger));
