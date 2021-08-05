/* eslint-disable no-unused-vars */
import { render, RenderResult } from '@testing-library/react';
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { Action, AnyAction, applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../../store/reducers';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface RenderWithRedux<S = any, A extends Action = AnyAction, I extends S = any> {
  (
    ui: ReactNode,
    reduxOptions?: {
      store?: Store<S, A>;
      initialState?: I;
    },
  ): RenderResult & {
    store: Store<S, A>;
  };
}

export const renderWithRedux: RenderWithRedux = (
  ui,
  { initialState, store = createStore(reducers, initialState, applyMiddleware(thunk)) } = {},
) => {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};
