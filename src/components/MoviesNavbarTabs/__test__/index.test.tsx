import React from 'react';
import { create } from 'react-test-renderer';

import MoviesNavbarTabs from '../index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn().mockReturnValue({ replace: jest.fn() }),
}));

describe('MoviesNavbarTabs component', () => {
  test('should render MoviesNavbarTabItem component by default', () => {
    const component = create(<MoviesNavbarTabs searchParams="" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
