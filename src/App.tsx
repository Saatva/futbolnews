import React from 'react';
import './App.scss';
import CartIcon from './components/CartIcon/CartIcon';
import { ReactComponent as SaatvaLogo } from './assets/saatva.svg';
import { useAppSelector } from './redux/hooks';
import MattressPage from './pages/MattressPage';

const App = () => {
  const cart = useAppSelector((state) => state.products.cart);

  return (
    <div className="app">
      <header className="header">
        <a href="/">
          <SaatvaLogo className="header__icon" />
        </a>
        <CartIcon cart={cart} />
      </header>
      <MattressPage />
    </div>
  );
};
export default App;
