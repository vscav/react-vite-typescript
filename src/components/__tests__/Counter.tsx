import { cleanup, fireEvent } from '@testing-library/react';
import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../../store';
import Counter from '../Counter';
import { renderWithRedux } from '../utils';

const ConnectedCounter = connect((state: State) => ({ count: state.count }))(Counter);

describe('Counter component tests', () => {
  afterEach(cleanup);

  test('can render with redux with defaults', () => {
    const { getByTestId, getByText } = renderWithRedux(<ConnectedCounter />);
    fireEvent.click(getByText('+'));
    expect(getByTestId('count-value')).toHaveTextContent('1');
  });

  test('can render with redux with custom initial state', () => {
    const { getByTestId, getByText } = renderWithRedux(<ConnectedCounter />, {
      initialState: { count: 3 },
    });
    fireEvent.click(getByText('-'));
    expect(getByTestId('count-value')).toHaveTextContent('2');
  });

  it('can render with redux with defaults with custom increment value', () => {
    const { getByTestId, getByText } = renderWithRedux(<ConnectedCounter difference={3} />);
    fireEvent.click(getByText('+'));
    expect(getByTestId('count-value')).toHaveTextContent('3');
  });

  it('can render with redux with defaults while not letting state being inferior to 0', () => {
    const { getByTestId, getByText } = renderWithRedux(<ConnectedCounter />);
    fireEvent.click(getByText('-'));
    expect(getByTestId('count-value')).toHaveTextContent('0');
  });
});
