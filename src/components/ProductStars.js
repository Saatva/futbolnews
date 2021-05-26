import { useContext } from 'react';
import { ProductContext } from '../state/productProvider';
import { FaStar, FaStarHalf } from 'react-icons/fa';

const ProductStars = () => {
  const { selectedProduct } = useContext(ProductContext);

  // round up for the loop
  const rating = Math.ceil(selectedProduct.reviewRating);
  const stars = [];

  // For decimal ratings, using a half star; For whole numbers, full star;
  for (let i = 1; i <= rating; i++) {
    if (i === rating && !Number.isInteger(selectedProduct.reviewRating)) {
      stars.push(<FaStarHalf key={Math.random()} />);
      break;
    }
    stars.push(<FaStar key={Math.random()} />);
  }

  return (
    <div className="review-stars">
      {stars} {selectedProduct.reviewRating} out of 5
    </div>
  );
};

export default ProductStars;
