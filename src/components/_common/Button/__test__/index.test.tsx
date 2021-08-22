import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import Button from '../index';

describe('Button component', () => {
  test('should render Button component by default', () => {
    const component = create(<Button title="Button title" />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Button component with all props', () => {
    const component = create(
      <Button title="Button title" onClick={() => undefined} type="button" variation="secondary" />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Button component with children', () => {
    const component = create(
      <Button onClick={() => undefined} type="button" variation="secondary">
        Button title
      </Button>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Button component as link with children', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <Button onClick={() => undefined} linkTo="test.com" variation="secondary">
          Button title
        </Button>
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render Button component as a link', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <Button title="Button title" linkTo="test.com" />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should trigger onClick method', () => {
    const handleOnClick = jest.fn();
    const component = create(<Button title="Button title" onClick={handleOnClick} />);

    component.root.props.onClick();

    expect(handleOnClick).toHaveBeenCalled();
  });
});
