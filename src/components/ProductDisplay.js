import { useContext } from 'react';
import { ProductContext } from '../state/productProvider';
import ProductTab from './ProductTab';
import ProductDetails from './ProductDetails';
import ProductImage from './ProductImage';
import AddToCart from './AddToCart';

const ProductDisplay = () => {
  const { products } = useContext(ProductContext);

  const productsMapped = products.map((product) => (
    <ProductTab key={product.name} product={product} />
  ));

  return (
      <main>
        <div className="image-panel">
          <ProductImage />
        </div>
        <div>
          <h2>Choose Your Mattress</h2>
          <label>SELECT MATTRESS TYPE:</label>
          <div className="tab-panel">{productsMapped}</div>
          <ProductDetails />
          <AddToCart />
        </div>
      </main>
  );
};

export default ProductDisplay;
