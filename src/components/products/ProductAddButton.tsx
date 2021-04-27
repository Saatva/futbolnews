import { Button } from '@material-ui/core';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setAddProductsCart } from 'store/actions/cartActions';
import { Product } from 'types';

interface ProductAddButtonProps {
  product: Product;
}

const ProductAddButton: FC<ProductAddButtonProps> = (props) => {
  const { product } = props;
  const dispatch = useDispatch();

  const onClickAddCart = () => {
    dispatch(setAddProductsCart(product));
  };

  return (
    <Button variant="contained" color="primary" fullWidth onClick={() => onClickAddCart()}>
      Add to Cart
    </Button>
  );
};

export default ProductAddButton;
