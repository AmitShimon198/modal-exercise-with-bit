import React from 'react';
import { render } from '@testing-library/react';
import { BasicModal } from './modal.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicModal />);
  const rendered = getByText('Open Modal');
  expect(rendered).toBeTruthy();
});
