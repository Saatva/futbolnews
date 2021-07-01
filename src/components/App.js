import React from 'react';
import { Box } from '@material-ui/core';
import Header from './Header';
import MattressPage from './MattressPage';

const App = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Header />
      <MattressPage />
    </Box>
  );
};

export default App;
