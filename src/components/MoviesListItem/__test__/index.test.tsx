import React from 'react';
import { create } from 'react-test-renderer';
import rrd from 'react-router-dom';

import { Movie } from 'redux/types';
import MoviesListItem from '../index';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

const movie: Movie = {
  id: 1,
  budget: 100,
  genres: ['Documentary'],
  overview: 'Overview',
  poster_path: 'https://via.placeholder.com/330x450',
  title: 'Movie 1',
  release_date: '1999',
  revenue: 102,
  runtime: 12312,
  tagline: 'tagline',
  vote_average: 4,
  vote_count: 100,
};

const { MemoryRouter, Router } = rrd;

describe('MoviesListItem component', () => {
  test('should render MoviesListItem component by default', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <MoviesListItem {...movie} />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });

  test('should redirect to movie details page', () => {
    const useHistoryPushStub = jest.fn();
    const scrollToStub = jest.fn();
    global.scrollTo = scrollToStub;

    const component = create(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Router history={{ push: useHistoryPushStub, location: {}, listen: jest.fn() } as any}>
        <MoviesListItem {...movie} />
      </Router>
    );

    component.root.findAllByType('li')[0].props.onClick();

    expect(useHistoryPushStub).toHaveBeenCalledWith('/movies/1');
    expect(scrollToStub).toHaveBeenCalled();
  });
});
