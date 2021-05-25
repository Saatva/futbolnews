import { render, fireEvent, screen } from '@testing-library/react'
import App from './App'

test('cart should start out empty', () => {
  render(<App />)
  const cart = screen.getByLabelText('items in cart')

  expect(cart).toHaveTextContent('0')
});

test('cart should increment when an item is added', () => {
  render(<App />)
  const cart = screen.getByLabelText('items in cart')
  const addToCartButton = screen.getByText('Add to Cart')

  fireEvent.click(addToCartButton)
  expect(cart).toHaveTextContent('1')
})
