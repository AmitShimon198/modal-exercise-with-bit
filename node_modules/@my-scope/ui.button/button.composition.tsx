import React from 'react';
import { Button } from './button';

export const BasicButton = () => (
  <Button onClick={() => alert('hi from clicked button')} >
    <span>Click Me</span>
  </Button>
);
