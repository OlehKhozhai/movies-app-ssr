import React from 'react';
import formik from 'formik';
import { create } from 'react-test-renderer';

import hooks from 'hooks';
import Select from '../index';

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
}));

describe('Select component', () => {
  test('should render Select component by default', () => {
    jest.spyOn(formik, 'useField').mockReturnValueOnce([
      { name: 'name', value: ['one', 'two'], onBlur: jest.fn(), onChange: jest.fn() },
      { initialTouched: false, value: ['one', 'two'], touched: true },
      { setError: jest.fn(), setTouched: jest.fn(), setValue: jest.fn() },
    ]);
    jest.spyOn(hooks, 'useOpenAndClose').mockReturnValueOnce({
      isOpen: false,
      onOpen: jest.fn(),
      onClose: jest.fn(),
      onToggle: jest.fn(),
    });

    const component = create(
      <Select placeholder="placeholder" name="name" label="label" options={['one', 'two']} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Select component with open dropdown', () => {
    jest.spyOn(formik, 'useField').mockReturnValueOnce([
      { name: 'name', value: ['one', 'two'], onBlur: jest.fn(), onChange: jest.fn() },
      { initialTouched: false, value: ['one', 'two'], touched: true },
      { setError: jest.fn(), setTouched: jest.fn(), setValue: jest.fn() },
    ]);
    jest.spyOn(hooks, 'useOpenAndClose').mockReturnValueOnce({
      isOpen: true,
      onOpen: jest.fn(),
      onClose: jest.fn(),
      onToggle: jest.fn(),
    });

    const component = create(
      <Select placeholder="placeholder" name="name" label="label" options={['one', 'two']} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Select component with error message', () => {
    jest.spyOn(formik, 'useField').mockReturnValueOnce([
      { name: 'name', value: ['one', 'two'], onBlur: jest.fn(), onChange: jest.fn() },
      { initialTouched: false, value: ['one', 'two'], touched: true, error: 'Error message' },
      { setError: jest.fn(), setTouched: jest.fn(), setValue: jest.fn() },
    ]);

    const component = create(
      <Select placeholder="placeholder" name="name" label="label" options={['one', 'two']} />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
