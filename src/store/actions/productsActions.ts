import axios from 'axios';
import { ThunkAction } from 'redux-thunk';
import { AppState, ListProductsActions, Product, ProductsActionsEnum, SelectedProductActions } from 'types';

export const setListProducts = (list: Product[]): ListProductsActions => ({
  type: ProductsActionsEnum.LIST,
  list,
});

export const setSelectedProduct = (product: Product): SelectedProductActions => ({
  type: ProductsActionsEnum.SELECTED,
  product,
});

export const getSelectProduct = (id?: string): ThunkAction<void, AppState, unknown, SelectedProductActions> => {
  return (dispatch, getState) => {
    try {
      const resultArray = getState().products.list;
      const productSelect = resultArray.find((p: Product) => p.id === id);

      if (productSelect) dispatch(setSelectedProduct(productSelect));
      else dispatch(setSelectedProduct(resultArray[0]));
    } catch (e) {
      console.error(e);
    }
  };
};

interface ResultObject {
  mattresses: { [key: string]: Product };
}

export const getProductApi = (): ThunkAction<void, AppState, unknown, ListProductsActions> => {
  return async (dispatch) => {
    try {
      const result = await axios.get<ResultObject>(`${process.env.PUBLIC_URL}/mattresses.json`);
      const resultObj = result.data.mattresses;
      const resultArray = Object.keys(resultObj).map((key) => ({ ...resultObj[key], id: key }));

      dispatch(setListProducts(resultArray));
      dispatch(getSelectProduct());
    } catch (e) {
      console.error(e);
    }
  };
};
