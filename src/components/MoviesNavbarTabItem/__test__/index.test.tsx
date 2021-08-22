import React from 'react';
import { create } from 'react-test-renderer';

import MoviesNavbarTabItem from '../index';

describe('MoviesNavbarTabItem component', () => {
  test('should render MoviesNavbarTabItem component by default', () => {
    const component = create(
      <MoviesNavbarTabItem title="test" isActive={false} onTabClick={() => undefined} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render active MoviesNavbarTabItem component', () => {
    const component = create(
      <MoviesNavbarTabItem title="test" isActive={true} onTabClick={() => undefined} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should trigger onTabClick method', () => {
    const onTabClickStub = jest.fn();
    const component = create(
      <MoviesNavbarTabItem title="test" isActive={true} onTabClick={onTabClickStub} />
    );

    component.root.findByType('li').props.onClick();

    expect(onTabClickStub).toHaveBeenCalledWith('test');
  });
});
