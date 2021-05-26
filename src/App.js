import './App.scss';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import { CartProvider } from './state/cartProvider';
import { ProductProvider } from './state/productProvider';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Header />
        <ProductDisplay />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
