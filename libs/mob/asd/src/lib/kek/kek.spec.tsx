import React from 'react';
import { render } from '@testing-library/react-native';

import Kek from './kek';

describe('Kek', () => {
  it('should render successfully', () => {
    const { root } = render(<Kek />);
    expect(root).toBeTruthy();
  });
});
