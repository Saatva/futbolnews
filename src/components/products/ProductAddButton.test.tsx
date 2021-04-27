import { fireEvent, render } from '@testing-library/react';
import reactRedux from 'react-redux';
import { AnyAction } from 'redux';
import ProductAddButton from './ProductAddButton';
import { AppThemeProvider } from 'src/modules/styles';
import { setAddProductsCart } from 'store/actions/cartActions';
import { AppState, CartActionsEnum, Product } from 'types';

const mockedReactRedux = reactRedux as jest.Mocked<typeof reactRedux>;
const mockUseSelector = mockedReactRedux.useSelector;
const mockUseDispatch = mockedReactRedux.useDispatch;
const getMockedStated = (): AppState => ({
  products: { list: [] },
  cart: { additions: [] },
});

describe('ProductAddButton', () => {
  let state: AppState;
  function basicMockedDispatch<T>(action: T): T {
    return action;
  }
  const mockedDispatch = jest.fn(basicMockedDispatch);
  beforeEach(() => {
    state = getMockedStated();
    mockUseSelector.mockClear();
    mockUseDispatch.mockClear();
    mockedDispatch.mockClear();

    mockUseSelector.mockImplementation((callback) => callback(state));
    mockUseDispatch.mockImplementation(() => mockedDispatch);
  });

  it('increments cart count on click', () => {
    mockedDispatch.mockImplementation((action: AnyAction) => {
      if (action.type === CartActionsEnum.ADD) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        state.cart.additions = [...state.cart.additions, action.addition];
      }
      return action;
    });
    const product: Product = {
      id: 'classic',
      name: 'Saatva Classic',
      price: 999,
      reviewRating: 4.9,
      imageFileName: 'classic-carousel.jpg',
    };
    const { getByRole } = render(
      <AppThemeProvider>
        <ProductAddButton product={product} />
      </AppThemeProvider>,
    );
    // cart should be empty
    expect(state.cart.additions.length).toBe(0);

    fireEvent.click(getByRole('button'));

    // cart should have 1 element
    expect(mockedDispatch).toHaveBeenCalledTimes(1);
    expect(mockedDispatch).toHaveBeenCalledWith(setAddProductsCart(product));
    expect(state.cart.additions.length).toBe(1);
  });
});
