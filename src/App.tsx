import React from "react";
import { Header } from "./components/Header";
import { CartProvider } from "./lib/Cart";
import { ProductsProvider } from "./lib/Products";
import { ProductsDisplay } from "./components/ProductsDisplay";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <main>
          <ProductsProvider>
            <ProductsDisplay />
          </ProductsProvider>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
