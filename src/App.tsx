import React, { useState } from 'react';

import Header from './components/Header';
import ChooseMattress from './views/ChooseMattress';

import './App.scss';

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <div className="app-container">
        <ChooseMattress handleAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default App;
