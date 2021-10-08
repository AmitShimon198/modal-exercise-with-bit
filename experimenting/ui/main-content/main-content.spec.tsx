import React from 'react';
import { render } from '@testing-library/react';
import { BasicMainContent } from './main-content.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicMainContent />);
  const rendered = getByText('Hi From Main');
  expect(rendered).toBeTruthy();
});
