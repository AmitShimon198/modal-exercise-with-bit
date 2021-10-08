import React from 'react';
import { render } from '@testing-library/react';
import { CardContainer } from './card.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<CardContainer >hello from Card</CardContainer>);
  const rendered = getByText('hello from Card');
  expect(rendered).toBeTruthy();
});
