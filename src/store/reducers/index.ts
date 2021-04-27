import { combineReducers } from 'redux';
import cart, { getInitialState as getCartState } from './cartReducer';
import products, { getInitialState as getProductState } from './productReducer';
import { AppState } from 'types';

export const reducers = combineReducers({ products, cart });

export const getInitialState = (): AppState => ({
  cart: getCartState(),
  products: getProductState(),
});
