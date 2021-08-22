import React from 'react';
import { create } from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import MovieDetailsBanner from '../index';

describe('MovieDetailsBanner component', () => {
  test('should render MovieDetailsBanner component by default', () => {
    const component = create(
      <MemoryRouter initialEntries={['/']}>
        <MovieDetailsBanner
          movie={{
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
          }}
        />
      </MemoryRouter>
    );

    expect(component.toJSON()).toMatchSnapshot();
  });
});
