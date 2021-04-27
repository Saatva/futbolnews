import { CartState } from './cart';
import { ProductState } from './product';

export * from './product';
export * from './cart';

export interface AppState {
  products: ProductState;
  cart: CartState;
}
