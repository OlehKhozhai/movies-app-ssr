import React from 'react';
import { create } from 'react-test-renderer';

import Dropdown from '../index';

describe('Dropdown component', () => {
  test('should render Dropdown component by default', () => {
    const component = create(
      <Dropdown
        isOpen={true}
        options={['test option 1', 'test option 2']}
        onOptionClick={() => undefined}
        onClose={() => undefined}
        onToggle={() => undefined}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Dropdown component with default value', () => {
    const component = create(
      <Dropdown
        value="Default value"
        isOpen={true}
        options={['test option 1', 'test option 2']}
        onOptionClick={() => undefined}
        onClose={() => undefined}
        onToggle={() => undefined}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Dropdown component with isOpen value of false ', () => {
    const component = create(
      <Dropdown
        isOpen={false}
        options={['test option 1', 'test option 2']}
        onOptionClick={() => undefined}
        onClose={() => undefined}
        onToggle={() => undefined}
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should trigger onOptionClick, onClose and onToggle methods', () => {
    const handleOnOptionClick = jest.fn();
    const handleOnClose = jest.fn();
    const handleOnToggle = jest.fn();
    const component = create(
      <Dropdown
        isOpen={true}
        options={['test option 1', 'test option 2']}
        onOptionClick={handleOnOptionClick}
        onClose={handleOnClose}
        onToggle={handleOnToggle}
      />
    );

    component.root.props.onOptionClick();
    component.root.props.onClose();
    component.root.props.onToggle();

    expect(handleOnOptionClick).toHaveBeenCalled();
    expect(handleOnClose).toHaveBeenCalled();
    expect(handleOnToggle).toHaveBeenCalled();
  });
});
