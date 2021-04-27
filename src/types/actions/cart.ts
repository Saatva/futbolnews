import { Action } from 'redux';
import { Product } from '../state';

export enum CartActionsEnum {
  ADD = 'CART/ADD',
}

export interface AddCartActions extends Action<typeof CartActionsEnum.ADD> {
  addition: Product;
}

export type CartActions = AddCartActions;
