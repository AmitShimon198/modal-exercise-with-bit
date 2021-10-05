import React from 'react';
import { render } from '@testing-library/react';
import { BasicHr } from './hr.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicHr />);
  const rendered = getByText('hello from Hr');
  expect(rendered).toBeTruthy();
});
