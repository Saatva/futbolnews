import React from 'react';
import './CartIcon.scss';

interface CartIconProps {
  cart: Record<string, number>
}

const CartIcon = ({ cart }: CartIconProps) => {
  const [menuActive, setMenuActive] = React.useState(false);
  const count = Object.values(cart).length ? Object.values(cart).reduce((a, b) => a + b) : 0;

  const buttonRef = React.useRef<HTMLButtonElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);

  // modified hook version of: https://stackoverflow.com/a/42234988
  React.useEffect(() => {
    function handleClickOutside(event: { target: any }) {
      if (!menuRef.current?.contains(event.target) && !buttonRef.current?.contains(event.target)) {
        setMenuActive(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuRef, buttonRef]);

  return (
    <div className="cart-icon">
      { count > 0
      && (
        <span className="cart-icon__badge" id="cartCount" data-testid="cart-count-badge">
          { count }
        </span>
      )}
      <button
        type="button"
        ref={buttonRef}
        className="cart-icon__button"
        onClick={() => setMenuActive(!menuActive)}
        aria-describedby="cartCount"
      >
        {/* sourced from https://heroicons.com/ */}
        <svg xmlns="http://www.w3.org/2000/svg" className="cart-icon__icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      </button>
      <div ref={menuRef} className={`cart-icon__menu ${menuActive ? 'active' : ''}`}>
        <h3>Current Cart</h3>
        { Object.keys(cart).length
          ? Object.entries(cart).map(([name, amount]) => (
            <div className="cart-icon__menu__row" key={name}>
              <span>
                {name}
              </span>
              <span>
                {amount}
              </span>
            </div>
          ))
          : (
            <div>
              No Items in Cart
            </div>
          )}
      </div>
    </div>
  );
};

export default CartIcon;
