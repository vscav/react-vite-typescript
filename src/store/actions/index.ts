import { CounterActionType } from '../action-types';

interface IncrementAction {
  type: CounterActionType.INCREMENT;
  payload: number;
}

interface DecrementAction {
  type: CounterActionType.DECREMENT;
  payload: number;
}

interface ResetAction {
  type: CounterActionType.RESET;
}

export type CounterAction = IncrementAction | DecrementAction | ResetAction;
