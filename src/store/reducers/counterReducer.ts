import { CounterActionType } from '../action-types';
import { CounterAction } from '../actions';

export const initialState = 0;

const reducer = (state: number = initialState, action: CounterAction): number => {
  switch (action.type) {
    case CounterActionType.INCREMENT:
      return state + action.payload;
    case CounterActionType.DECREMENT:
      return state - action.payload <= 0 ? 0 : state - action.payload;
    case CounterActionType.RESET:
      return 0;
    default:
      return state;
  }
};

export default reducer;
