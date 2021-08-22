import React from 'react';
import formik from 'formik';
import { create } from 'react-test-renderer';

import Input from '../index';

jest.mock('formik', () => ({
  ...jest.requireActual('formik'),
}));

describe('Input component', () => {
  test('should render Input component by default', () => {
    jest.spyOn(formik, 'useField').mockReturnValue([
      { name: 'name', value: 'value', onBlur: jest.fn(), onChange: jest.fn() },
      { initialTouched: false, value: 'value', touched: true },
      { setError: jest.fn(), setTouched: jest.fn(), setValue: jest.fn() },
    ]);

    const component = create(<Input name="name" label="label" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Input component with type of password', () => {
    jest.spyOn(formik, 'useField').mockReturnValue([
      { name: 'name', value: 'value', onBlur: jest.fn(), onChange: jest.fn() },
      { initialTouched: false, value: 'value', touched: true },
      { setError: jest.fn(), setTouched: jest.fn(), setValue: jest.fn() },
    ]);

    const component = create(<Input name="name" label="label" type="password" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Input component with error message', () => {
    jest.spyOn(formik, 'useField').mockReturnValue([
      { name: 'name', value: 'value', onBlur: jest.fn(), onChange: jest.fn() },
      { initialTouched: false, value: 'value', touched: true, error: 'Error message' },
      { setError: jest.fn(), setTouched: jest.fn(), setValue: jest.fn() },
    ]);

    const component = create(<Input name="name" label="label" type="password" />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
