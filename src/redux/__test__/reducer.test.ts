import reducer, { initialState } from '../reducer';
import {
  CREATE_MOVIE,
  CREATE_MOVIE_FAIL,
  CREATE_MOVIE_SUCCESS,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_FAIL,
  GET_MOVIE_DETAILS_SUCCESS,
  EDIT_MOVIE,
  EDIT_MOVIE_FAIL,
  EDIT_MOVIE_SUCCESS,
  GET_MOVIES,
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  REMOVE_MOVIE,
  REMOVE_MOVIE_FAIL,
  REMOVE_MOVIE_SUCCESS,
} from '../types';

describe('Reducer unit testing', () => {
  describe('get movies types', () => {
    test('GET_MOVIES ', () => {
      expect(reducer(initialState, { type: GET_MOVIES, payload: { params: '' } })).toEqual({
        ...initialState,
        isMoviesLoading: true,
        error: null,
      });
    });

    test('GET_MOVIES_SUCCESS', () => {
      expect(
        reducer(initialState, {
          type: GET_MOVIES_SUCCESS,
          payload: [
            {
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
            },
          ],
        })
      ).toEqual({
        ...initialState,
        isMoviesLoading: false,
        movies: [
          {
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
          },
        ],
      });
    });

    test('GET_MOVIES_FAIL', () => {
      expect(
        reducer(initialState, {
          type: GET_MOVIES_FAIL,
          payload: 'Error message',
        })
      ).toEqual({
        ...initialState,
        isMoviesLoading: false,
        movies: [],
        error: 'Error message',
      });
    });
  });

  describe('get movie details types', () => {
    test('GET_MOVIE_DETAILS ', () => {
      expect(reducer(initialState, { type: GET_MOVIE_DETAILS, payload: 1 })).toEqual({
        ...initialState,
        error: null,
      });
    });

    test('GET_MOVIE_DETAILS_SUCCESS', () => {
      expect(
        reducer(initialState, {
          type: GET_MOVIE_DETAILS_SUCCESS,
          payload: {
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
          },
        })
      ).toEqual({
        ...initialState,
        isMoviesLoading: false,
        movieDetails: {
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
        },
      });
    });

    test('GET_MOVIE_DETAILS_FAIL', () => {
      expect(
        reducer(initialState, {
          type: GET_MOVIE_DETAILS_FAIL,
          payload: 'Error message',
        })
      ).toEqual({
        ...initialState,
        movieDetails: null,
        error: 'Error message',
      });
    });
  });

  describe('create movie types', () => {
    test('CREATE_MOVIE ', () => {
      expect(
        reducer(initialState, {
          type: CREATE_MOVIE,
          payload: {
            title: 'Movie 1',
            release_date: '1999',
            poster_path: 'https://via.placeholder.com/330x450',
            genres: ['Documentary'],
            overview: 'Overview',
            runtime: 12312,
          },
        })
      ).toEqual({
        ...initialState,
        error: null,
      });
    });

    test('CREATE_MOVIE_SUCCESS', () => {
      expect(reducer(initialState, { type: CREATE_MOVIE_SUCCESS })).toEqual({
        ...initialState,
      });
    });

    test('CREATE_MOVIE_FAIL', () => {
      expect(
        reducer(initialState, {
          type: CREATE_MOVIE_FAIL,
          payload: 'Error message',
        })
      ).toEqual({
        ...initialState,
        error: 'Error message',
      });
    });
  });

  describe('edit movie types', () => {
    test('EDIT_MOVIE ', () => {
      expect(
        reducer(initialState, {
          type: EDIT_MOVIE,
          payload: {
            id: 1,
            title: 'Movie 2',
          },
        })
      ).toEqual({
        ...initialState,
        error: null,
      });
    });

    test('EDIT_MOVIE_SUCCESS', () => {
      expect(
        reducer(
          {
            ...initialState,
            movies: [
              {
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
              },
            ],
          },
          {
            type: EDIT_MOVIE_SUCCESS,
            payload: {
              id: 1,
              budget: 100,
              genres: ['Documentary'],
              overview: 'Overview',
              poster_path: 'https://via.placeholder.com/330x450',
              title: 'Movie 2',
              release_date: '1999',
              revenue: 102,
              runtime: 12312,
              tagline: 'tagline',
              vote_average: 4,
              vote_count: 100,
            },
          }
        )
      ).toEqual({
        ...initialState,
        movies: [
          {
            id: 1,
            budget: 100,
            genres: ['Documentary'],
            overview: 'Overview',
            poster_path: 'https://via.placeholder.com/330x450',
            title: 'Movie 2',
            release_date: '1999',
            revenue: 102,
            runtime: 12312,
            tagline: 'tagline',
            vote_average: 4,
            vote_count: 100,
          },
        ],
      });
    });

    test('EDIT_MOVIE_FAIL', () => {
      expect(
        reducer(initialState, {
          type: EDIT_MOVIE_FAIL,
          payload: 'Error message',
        })
      ).toEqual({
        ...initialState,
        error: 'Error message',
      });
    });
  });

  describe('remove movie types', () => {
    test('REMOVE_MOVIE ', () => {
      expect(
        reducer(initialState, {
          type: REMOVE_MOVIE,
          payload: 1,
        })
      ).toEqual({
        ...initialState,
        error: null,
      });
    });

    test('REMOVE_MOVIE_SUCCESS', () => {
      expect(reducer(initialState, { type: REMOVE_MOVIE_SUCCESS })).toEqual({
        ...initialState,
      });
    });

    test('REMOVE_MOVIE_FAIL', () => {
      expect(
        reducer(initialState, {
          type: REMOVE_MOVIE_FAIL,
          payload: 'Error message',
        })
      ).toEqual({
        ...initialState,
        error: 'Error message',
      });
    });
  });
});
