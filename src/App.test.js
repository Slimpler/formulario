import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Assign
  render(<App />);
  // Action
  const linkElement = screen.getByText(/learn react/i);
  // Assert 
  expect(linkElement).toBeInTheDocument();
});
