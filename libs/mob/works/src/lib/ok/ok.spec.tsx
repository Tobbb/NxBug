import React from 'react';
import { render } from '@testing-library/react-native';

import Ok from './ok';

describe('Ok', () => {
  it('should render successfully', () => {
    const { root } = render(<Ok />);
    expect(root).toBeTruthy();
  });
});
