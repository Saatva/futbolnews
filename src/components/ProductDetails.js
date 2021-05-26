import { useContext } from 'react';
import { ProductContext } from '../state/productProvider';
import ProductStars from './ProductStars';

const ProductDetails = () => {
  const { selectedProduct } = useContext(ProductContext);
  return (
    <div className="product-details">
      <div className="product-name">
        <p>{selectedProduct.name}</p>
      </div>
      <ProductStars />
      <div>
        <p className="product-price">
          {Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(selectedProduct.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
