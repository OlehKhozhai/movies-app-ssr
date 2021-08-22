import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import Footer from '../index';

describe('Footer component', () => {
  test('should render Footer component by default', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <Footer />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
