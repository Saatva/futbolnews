import { useContext } from 'react';
import { ProductContext } from '../state/productProvider';

const ProductTab = ({ product }) => {
  const { selectedProduct, setSelectedProduct } = useContext(ProductContext);
  return (
    <div
      className={
        selectedProduct.name === product.name
          ? 'select-tab is-selected'
          : 'select-tab'
      }
      onClick={() => setSelectedProduct(product)}
    >
      {product.name}
    </div>
  );
};

export default ProductTab;
