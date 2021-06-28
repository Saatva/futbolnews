import { fireEvent, render } from '@testing-library/react';
import App from './App';

test('Add to Cart button', () => {
  render(<App />);
  const addToCartButton = document.getElementsByClassName('addButton')[0];
  const cartItemBubble = document.getElementsByClassName('cartIconCount')[0];
  expect(cartItemBubble.innerHTML).toBe("0");
  fireEvent.click(addToCartButton);
  expect(cartItemBubble.innerHTML).toBe("1");
});
