import { ReactComponent as CartLogo } from '../images/shopping-cart-solid.svg';
import { useContext } from 'react';
import { CartContext } from '../state/cartProvider';

const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <header>
      <div>
        <h1>saatva</h1>
      </div>
      <div>
        <CartLogo className="cart-icon" />
        <div className="cart-qty"><div>{cart.length}</div></div>
      </div>
    </header>
  );
};

export default Header;
