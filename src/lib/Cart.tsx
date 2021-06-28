import React, { FunctionComponent, useState } from "react";

export interface CartContextI {
  items: Array<{
    name: string;
  }>;
  addItem: (name: string) => void;
}

export const CartContext =
  React.createContext<CartContextI | undefined>(undefined);

export const CartProvider: FunctionComponent = ({ children }) => {
  const [items, setItems] = useState<Array<{ name: string }>>([]);

  const addItem = (name: string) => {
    setItems((prevItems) => [...prevItems, { name }]);
  };

  return (
    <CartContext.Provider value={{ items, addItem }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
