import Home from '@/pages';
import { render, screen } from '@testing-library/react';

it('should have Docs text', () => {
  render(<Home />);

  const myElem = screen.getByText('Docs');

  expect(myElem).toBeInTheDocument();
});
