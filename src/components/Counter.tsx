import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../store';

interface CounterProps {
  difference?: number;
}

const Counter: React.FC<CounterProps> = ({ difference = 1 }) => {
  const value = useSelector((state: State) => state.count);
  const dispatch = useDispatch();
  const { incrementCounter, decrementCounter, resetCounter } = bindActionCreators(actionCreators, dispatch);

  return (
    <div className="counter-container">
      <button type="button" className="button button--small" onClick={() => decrementCounter(difference)}>
        -
      </button>
      <span data-testid="count-value">{value}</span>
      <button type="button" className="button button--small" onClick={() => incrementCounter(difference)}>
        +
      </button>
      <button type="button" className="button" onClick={() => resetCounter()}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
