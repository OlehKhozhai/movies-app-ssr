import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { create } from 'react-test-renderer';

import DeleteMovie from '../index';

describe('DeleteMovie component', () => {
  test('should render DeleteMovie component by default', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <DeleteMovie onConfirm={() => undefined} />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should trigger handleOnConfirm method', () => {
    const handleOnConfirm = jest.fn();
    const component = create(<DeleteMovie onConfirm={handleOnConfirm} />);

    component.root.props.onConfirm();

    expect(handleOnConfirm).toHaveBeenCalled();
  });
});
