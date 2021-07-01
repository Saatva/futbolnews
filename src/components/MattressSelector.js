import React from 'react';
import { Box, Typography } from '@material-ui/core';
import '../css/mattress-selector.css';

const MattressSelector = ({ mattresses, selectedMattress, handleMattressSelect }) => {
  return (
    <Box className="mattress-selector-container">
      <Typography className="mattress-selector-header">SELECT MATTRESS TYPE</Typography>
      <Box className="mattress-selector">
        {Object.keys(mattresses).map((mattressKey) => (
          <span
            key={mattressKey}
            className={`mattress-option ${mattressKey === selectedMattress ? 'selected' : ''}`}
            onClick={() => handleMattressSelect(mattressKey)}
          >
            {mattresses[mattressKey].name}
          </span>
        ))}
      </Box>
    </Box>
  );
};

export default MattressSelector;
