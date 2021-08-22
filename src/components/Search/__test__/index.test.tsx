import React from 'react';
import { create } from 'react-test-renderer';

import Search from '../index';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: jest.fn().mockReturnValue({
    replace: jest.fn(),
    location: {
      search: '',
    },
  }),
}));

describe('Search component', () => {
  test('should render markup by default', () => {
    const component = create(<Search />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should handle input changes', () => {
    const setSearchValueStub = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValue(['', setSearchValueStub]);
    const component = create(<Search />);

    component.root.findByType('input').props.onChange({ target: { value: 'test' } });

    expect(setSearchValueStub).toHaveBeenCalledWith('test');
  });

  test('should clear input value after click on button', () => {
    const setSearchValueStub = jest.fn();
    jest.spyOn(React, 'useState').mockReturnValue(['test', setSearchValueStub]);
    const component = create(<Search />);

    component.root.findByType('button').props.onClick();

    expect(setSearchValueStub).toHaveBeenCalledWith('');
  });
});
