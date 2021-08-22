import React from 'react';
import { create } from 'react-test-renderer';

import MoviesNavbar from '../index';

jest.mock('components/MoviesNavbarTabs', () => ({
  __esModule: true,
  default: () => '---MoviesNavbarTabs---',
}));

jest.mock('components/MoviesNavbarSortBy', () => ({
  __esModule: true,
  default: () => '---MoviesNavbarSortBy---',
}));

describe('MoviesNavbar component', () => {
  test('should render MoviesNavbar component by default', () => {
    const component = create(<MoviesNavbar searchParams="" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
