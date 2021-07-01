import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { useDispatch, useSelector } from 'react-redux';
import '../css/mattress-page.css';
import MattressSelector from './MattressSelector';
import { loadMattresses } from '../redux/ducks/mattresses';
import { addItemToCart } from '../redux/ducks/cart';

const StyledRating = withStyles({
  iconFilled: {
    color: '#d5aa63',
  },
})(Rating);

const Mattresses = () => {
  const dispatch = useDispatch();
  const mattresses = useSelector((state) => state.mattresses);
  const [selectedMattress, setSelectedMattress] = useState('classic');

  const handleMattressSelect = (selectedMattress) => {
    setSelectedMattress(selectedMattress);
  };

  const handleAddToCardClick = () => {
    dispatch(addItemToCart(mattresses[selectedMattress]));
  };

  useEffect(() => {
    dispatch(loadMattresses());
  }, [dispatch]);

  if (Object.keys(mattresses).length === 0) {
    return 'Loading...';
  }

  return (
    <Box className="mattress-card">
      <Box className="image-container">
        {Object.keys(mattresses).map((mattressKey) => (
          <img
            key={mattressKey}
            src={`images/${mattresses[mattressKey].imageFileName}`}
            alt={`${mattresses[mattressKey].name}`}
            className={mattressKey !== selectedMattress ? 'transparent' : ''}
          />
        ))}
      </Box>
      <Box className="mattress-card-data">
        <Typography variant="h4" style={{ marginBottom: '2.5rem' }}>
          Choose Your Mattress
        </Typography>
        <MattressSelector
          mattresses={mattresses}
          selectedMattress={selectedMattress}
          handleMattressSelect={handleMattressSelect}
        />
        <Box className="mattress-details">
          <Typography style={{ fontWeight: 600 }}>{mattresses[selectedMattress].name}</Typography>
          <Typography>${mattresses[selectedMattress].price}</Typography>
        </Box>
        <StyledRating
          value={mattresses[selectedMattress].reviewRating}
          readOnly
          precision={0.1}
          size="small"
          className="mattress-rating"
        />
        <button>
          <Typography onClick={handleAddToCardClick}>Add to Cart</Typography>
        </button>
      </Box>
    </Box>
  );
};

export default Mattresses;
