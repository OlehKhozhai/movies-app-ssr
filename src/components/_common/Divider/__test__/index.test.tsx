import React from 'react';
import { create } from 'react-test-renderer';

import Divider from '../index';

describe('Divider component', () => {
  test('should render Divider component by default', () => {
    const component = create(<Divider />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
