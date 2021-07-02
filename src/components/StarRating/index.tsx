import React from 'react';
import { Star, StarFill, StarHalf } from 'react-bootstrap-icons';

import { COLORS } from '../../constants';

import './styles.scss';

interface Props {
  rating: number | undefined;
}

const StarRating = (props: Props) => {
  const { rating } = props;

  const renderStars = () => {
    if (rating) {
      let wholeStars = Math.trunc(rating);
      const remainder = rating - wholeStars;
      const hasHalfStar = remainder > 0 && remainder <= 0.5;
      const emptyStars = 5 - Math.ceil(rating);
      const renderedStars = [];

      if (remainder > 0.5) {
        wholeStars += 1;
      }

      for (let i = 0; i < wholeStars; i++) {
        renderedStars.push(<StarFill className="star-container" color={COLORS.GOLD} />);
      }

      if (hasHalfStar) {
        renderedStars.push(<StarHalf className="star-container" color={COLORS.GOLD} />);
      }

      for (let i = 0; i < emptyStars; i++) {
        renderedStars.push(<Star className="star-container" color={COLORS.GOLD} />);
      }

      return renderedStars;
    }
  };

  return (
    <div className="star-rating">
      <span>{renderStars()}</span>
      <span>({rating})</span>
    </div>
  );
};

export default StarRating;
