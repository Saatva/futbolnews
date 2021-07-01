const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';

export const addItemToCart = (item) => ({
  type: ADD_ITEM_TO_CART,
  payload: item,
});

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default cartReducer;
