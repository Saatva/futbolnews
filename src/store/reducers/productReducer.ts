import { Reducer } from 'redux';
import { Product, ProductState, ProductsActions, ProductsActionsEnum } from 'types';

export const getInitialState = (): ProductState => ({ list: [], product: {} as Product });

const productReducer: Reducer<ProductState, ProductsActions> = (state = getInitialState(), action) => {
  switch (action.type) {
    case ProductsActionsEnum.LIST:
      return { ...state, list: action.list };
    case ProductsActionsEnum.SELECTED:
      return { ...state, product: action.product };
    default:
      return state;
  }
};

export default productReducer;
