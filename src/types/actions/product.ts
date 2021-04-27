import { Action } from 'redux';
import { Product } from '../state';

export enum ProductsActionsEnum {
  LIST = 'PRODUCT/LIST',
  SELECTED = 'PRODUCT/SELECTED',
}

export interface ListProductsActions extends Action<typeof ProductsActionsEnum.LIST> {
  list: Product[];
}

export interface SelectedProductActions extends Action<typeof ProductsActionsEnum.SELECTED> {
  product: Product;
}

export type ProductsActions = ListProductsActions | SelectedProductActions;
