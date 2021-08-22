import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import Logo from '../index';

describe('Logo component', () => {
  test('should render Logo component by default', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <Logo />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
