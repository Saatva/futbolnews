import React, { FunctionComponent } from "react";
import mattresses from "../mattresses.json";

export interface ProductsContextI {
  mattresses: {
    [productName: string]: {
      name: string;
      price: number;
      reviewRating: number;
      imageFileName: string;
    };
  };
}

export const ProductsContext =
  React.createContext<ProductsContextI | undefined>(undefined);

export const ProductsProvider: FunctionComponent = ({ children }) => {
  return (
    <ProductsContext.Provider value={mattresses}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const context = React.useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a ProductsProvider");
  }
  return context;
};
