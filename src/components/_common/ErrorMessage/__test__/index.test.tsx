import React from 'react';
import { create } from 'react-test-renderer';

import ErrorMessage from '../index';

describe('ErrorMessages component', () => {
  test('should render ErrorMessage component by default', () => {
    const component = create(<ErrorMessage text="Error message" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
