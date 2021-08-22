import React from 'react';
import { create } from 'react-test-renderer';

import NotFound from '../index';

describe('NotFound component', () => {
  test('should render markup by default', () => {
    const component = create(<NotFound />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
