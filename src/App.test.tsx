import React from 'react';
import {
  render, fireEvent, waitFor, screen,
} from './test-utils';

import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('should increment cart # when pressing purchase button', async () => {
  render(<App />);

  expect(screen.getByRole('button', { name: 'Add to Cart' }));

  fireEvent.click(screen.getByRole('button', { name: 'Add to Cart' }));

  expect(await screen.getByTestId('cart-count-badge')).toBeInTheDocument();
  expect(await screen.getByTestId('cart-count-badge').textContent).toBe('1');

  fireEvent.click(screen.getByRole('button', { name: 'Add to Cart' }));

  expect(await screen.getByTestId('cart-count-badge').textContent).toBe('2');
});
