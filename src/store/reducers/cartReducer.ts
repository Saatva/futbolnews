import { Reducer } from 'redux';
import { CartActions, CartActionsEnum, CartState } from 'types';

export const getInitialState = (): CartState => ({ additions: [] });

const cartReducer: Reducer<CartState, CartActions> = (state = getInitialState(), action) => {
  switch (action.type) {
    case CartActionsEnum.ADD:
      return { ...state, additions: [...state.additions, action.addition] };
    default:
      return state;
  }
};

export default cartReducer;
