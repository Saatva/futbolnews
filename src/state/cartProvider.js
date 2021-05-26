import React, { useState, createContext } from "react";

const initialState = {
  cart: []
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [cart, updateCart] = useState(initialState.cart);

  const addToCart = (cartItem) => {
        // append the cart item to the end of the array.
        const newCart = [...cart, cartItem];
        updateCart(newCart);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
