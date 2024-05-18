import { render, screen } from '@testing-library/react';
import App from './App';

test('renders specials heading', () => {
   render(<App />);
   const linkElement = screen.getByText(/This week's specials/);
   expect(linkElement).toBeInTheDocument();
});
