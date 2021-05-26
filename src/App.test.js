import { render, screen } from '@testing-library/react';
import App from './App';

test('renders product display page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Choose Your Mattress/i);
  expect(linkElement).toBeInTheDocument();
});