import React from 'react';
import { create } from 'react-test-renderer';
import { render, fireEvent, waitFor } from '@testing-library/react';

import CreateAndEditMovie from '../index';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockImplementation(() => () => undefined),
}));

jest.mock('components/_common/FormFields/Input', () => ({
  __esModule: true,
  default: () => '---Input---',
}));
jest.mock('components/_common/FormFields/Select', () => ({
  __esModule: true,
  default: () => '---Select---',
}));

describe('CreateAndEditMovie component', () => {
  test('should render markup by default', () => {
    const component = create(<CreateAndEditMovie onSubmit={() => undefined} />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should render edit movie markup', () => {
    const component = create(
      <CreateAndEditMovie
        onSubmit={() => undefined}
        initialValues={{ title: 'test title' }}
        action="edit"
      />
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should trigger onSubmit function', async () => {
    const onSubmitStub = jest.fn();
    const { queryByTestId } = render(
      <CreateAndEditMovie
        onSubmit={onSubmitStub}
        initialValues={{
          title: 'Test title',
          release_date: '2020',
          poster_path: 'poster_path',
          genres: ['Documentary'],
          overview: 'Overview',
          runtime: 10,
        }}
        action="edit"
      />
    );

    await waitFor(() => {
      const form = queryByTestId('form');

      if (form) {
        fireEvent.submit(form);
      }
    });

    expect(onSubmitStub).toHaveBeenCalled();
  });
});
