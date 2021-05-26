import { useContext } from 'react';
import { ProductContext } from '../state/productProvider';

const ProductImage = () => {
  const { selectedProduct } = useContext(ProductContext);
  return (
    <img
      className="product-image"
      src={`/images/${selectedProduct.imageFileName}`}
      alt={selectedProduct.name}
    />
  );
};

export default ProductImage;
