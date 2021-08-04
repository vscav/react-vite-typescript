import { Dispatch } from 'redux';
import { CounterActionType } from '../action-types';
import { CounterAction } from '../actions';

export const incrementCounter = (value: number) => {
  return (dispatch: Dispatch<CounterAction>): void => {
    dispatch({
      type: CounterActionType.INCREMENT,
      payload: value,
    });
  };
};

export const decrementCounter = (value: number) => {
  return (dispatch: Dispatch<CounterAction>): void => {
    dispatch({
      type: CounterActionType.DECREMENT,
      payload: value,
    });
  };
};

export const resetCounter = () => {
  return (dispatch: Dispatch<CounterAction>): void => {
    dispatch({
      type: CounterActionType.RESET,
    });
  };
};
