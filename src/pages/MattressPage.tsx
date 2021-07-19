/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import mattressResponse from '../api/mattresses.json';
import { useAppDispatch } from '../redux/hooks';
import { addProductToCart } from '../redux/productsSlice';
import ProductPage from '../components/ProductPage/ProductPage';

const MattressPage = () => {
  const dispatch = useAppDispatch();
  const [radioIndex, setRadioIndex] = React.useState(0);

  const mattresses = Object.values(mattressResponse.mattresses);

  return (
    <ProductPage
      pageTitle="Choose Your Mattress"
      imagePath={mattresses[radioIndex].imageFileName}
      optionsTitle="Select Mattress Type"
      onOptionChange={(index) => setRadioIndex(index)}
      productOptions={mattresses.map((mattress) => mattress.name)}
      optionIndex={radioIndex}
      optionTitle={`${mattresses[radioIndex].name} Mattress`}
      optionPrice={mattresses[radioIndex].price}
      optionRating={Number((Math.round(mattresses[radioIndex].reviewRating * 2) / 2).toFixed(1))}
      onPurchase={() => dispatch(addProductToCart(mattresses[radioIndex].name))}
      buttonTitle="Add to Cart"
    />
  );
};

export default MattressPage;
