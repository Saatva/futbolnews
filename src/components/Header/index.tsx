import React from 'react';

import cartIcon from '../../assets/cart.svg';

import './styles.scss';

interface Props {
  cartCount: number;
}

const Header = (props: Props) => {
  const { cartCount } = props;

  return (
    <header className="header-container">
      <div className="header-sub-container">
        <div className="header-logo">saatva</div>
        <div className="header-cart-container">
          <div className="header-count">{cartCount}</div>
          <img className="header-cart" src={cartIcon} alt="Shopping Cart" />
        </div>
      </div>
    </header>
  );
};

export default Header;
