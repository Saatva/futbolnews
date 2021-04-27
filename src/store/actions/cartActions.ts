import { AddCartActions, CartActionsEnum, Product } from 'types';

export const setAddProductsCart = (addition: Product): AddCartActions => ({
  type: CartActionsEnum.ADD,
  addition,
});

export default {};
