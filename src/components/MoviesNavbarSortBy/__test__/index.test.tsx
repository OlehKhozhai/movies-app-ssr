import React from 'react';
import { create } from 'react-test-renderer';

import hooks from 'hooks';
import MoviesNavbarSortBy from '../index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn().mockReturnValue({ replace: jest.fn() }),
}));

describe('MoviesNavbarSortBy component', () => {
  test('should render MoviesNavbarSortBy component by default', () => {
    const component = create(<MoviesNavbarSortBy searchParams="" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render MoviesNavbarSortBy component with open dropdown', () => {
    jest.spyOn(hooks, 'useOpenAndClose').mockReturnValueOnce({
      isOpen: true,
      onOpen: jest.fn(),
      onClose: jest.fn(),
      onToggle: jest.fn(),
    });

    const component = create(<MoviesNavbarSortBy searchParams="" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
