import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../store/reducers';

export const renderWithRedux = (
  ui: JSX.Element,
  { initialState, store = createStore(reducers, initialState, applyMiddleware(thunk)) } = {},
): any => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};
