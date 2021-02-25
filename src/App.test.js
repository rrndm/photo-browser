import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home'

test('renders title', () => {
  render(<Home/>);
  const linkElement = screen.getByText(/Welcome to Photo Browser app/i);
  expect(linkElement).toBeInTheDocument();
});
