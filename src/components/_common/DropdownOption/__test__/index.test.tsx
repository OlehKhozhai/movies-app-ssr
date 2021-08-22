import React from 'react';
import { create } from 'react-test-renderer';

import DropdownOption from '../index';

describe('DropdownOption component', () => {
  test('should render DropdownOption component by default', () => {
    const component = create(
      <DropdownOption option="Test option" onOptionClick={() => undefined} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should trigger onOptionClick method', () => {
    const handleOnOptionClick = jest.fn();
    const component = create(
      <DropdownOption option="Test option" onOptionClick={handleOnOptionClick} />
    );

    component.root.findByType('li').props.onClick();

    expect(handleOnOptionClick).toHaveBeenCalledWith('Test option');
  });
});
