import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import hooks from 'hooks';
import HomeBanner from '../index';

jest.mock('components/_common/Modal', () => ({
  __esModule: true,
  default: () => '---Modal---',
}));

describe('HomeBanner component', () => {
  test('should render HomeBanner component by default', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <HomeBanner />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render HomeBanner component with opened modal', () => {
    jest.spyOn(hooks, 'useOpenAndClose').mockReturnValue({
      isOpen: true,
      onOpen: jest.fn(),
      onClose: jest.fn(),
      onToggle: jest.fn(),
    });

    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <HomeBanner />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
