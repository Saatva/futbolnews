import { useContext } from 'react';
import { ProductContext } from '../state/productProvider';
import { CartContext } from '../state/cartProvider';

const AddToCart = () => {
  const { selectedProduct } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  return (
    <button className="add-to-cart" onClick={() => addToCart(selectedProduct)}>
      Add to Cart
    </button>
  );
};

export default AddToCart;
