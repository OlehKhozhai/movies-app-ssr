import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {
  GET_MOVIES,
  GET_MOVIES_SUCCESS,
  GET_MOVIES_FAIL,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAIL,
  CREATE_MOVIE,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAIL,
  EDIT_MOVIE,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_FAIL,
  REMOVE_MOVIE,
  REMOVE_MOVIE_SUCCESS,
  REMOVE_MOVIE_FAIL,
} from 'redux/types';
import {
  createMovieAction,
  editMovieAction,
  getMovieDetailsAction,
  getMoviesAction,
  removeMovieAction,
} from 'redux/actions';
import helpers from 'helpers';

const mockStore = configureStore([thunk]);
const store = mockStore({});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TestDispatch = any;

describe('Actions unit testing', () => {
  beforeEach(() => {
    store.clearActions();
  });

  describe('getMoviesAction', () => {
    test('success case', () => {
      jest
        .spyOn(helpers, 'doFetch')
        .mockImplementationOnce(() => Promise.resolve({ data: [{ id: 1 }] }));

      store.dispatch<TestDispatch>(getMoviesAction({ params: '' })).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: GET_MOVIES },
          { type: GET_MOVIES_SUCCESS, payload: [{ id: 1 }] },
        ]);
      });
    });

    test('error case', () => {
      jest.spyOn(helpers, 'doFetch').mockImplementationOnce(() => Promise.reject('Error message'));

      store.dispatch<TestDispatch>(getMoviesAction({ params: '' })).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: GET_MOVIES },
          { type: GET_MOVIES_FAIL, payload: 'Error message' },
        ]);
      });
    });
  });

  describe('getMovieDetailsAction', () => {
    test('success case', () => {
      jest.spyOn(helpers, 'doFetch').mockImplementationOnce(() => Promise.resolve({ id: 1 }));

      store.dispatch<TestDispatch>(getMovieDetailsAction(1)).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: GET_MOVIE_DETAILS, payload: 1 },
          { type: GET_MOVIE_DETAILS_SUCCESS, payload: { id: 1 } },
        ]);
      });
    });

    test('error case', () => {
      jest.spyOn(helpers, 'doFetch').mockImplementationOnce(() => Promise.reject('Error message'));

      store.dispatch<TestDispatch>(getMovieDetailsAction(1)).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: GET_MOVIE_DETAILS, payload: 1 },
          { type: GET_MOVIE_DETAILS_FAIL, payload: 'Error message' },
        ]);
      });
    });
  });

  describe('createMovieAction', () => {
    test('success case', () => {
      jest.spyOn(helpers, 'doFetch').mockImplementationOnce(() =>
        Promise.resolve({
          title: 'Movie 1',
          release_date: '1999',
          poster_path: 'https://via.placeholder.com/330x450',
          genres: ['Documentary'],
          overview: 'Overview',
          runtime: 12312,
          id: 1,
        })
      );

      store.dispatch<TestDispatch>(createMovieAction({ title: 'Movie 1' })).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: CREATE_MOVIE },
          {
            type: CREATE_MOVIE_SUCCESS,
            payload: {
              title: 'Movie 1',
              release_date: '1999',
              poster_path: 'https://via.placeholder.com/330x450',
              genres: ['Documentary'],
              overview: 'Overview',
              runtime: 12312,
              id: 1,
            },
          },
        ]);
      });
    });

    test('error case 1', () => {
      jest
        .spyOn(helpers, 'doFetch')
        .mockImplementationOnce(() => Promise.reject('Error message 1'));

      store.dispatch<TestDispatch>(createMovieAction({ title: 'Movie 1' })).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: CREATE_MOVIE },
          { type: CREATE_MOVIE_FAIL, payload: 'Error message 1' },
        ]);
      });
    });

    test('error case 2', () => {
      jest
        .spyOn(helpers, 'doFetch')
        .mockImplementationOnce(() => Promise.resolve({ messages: 'Error message 2' }));

      store.dispatch<TestDispatch>(createMovieAction({ title: 'Movie 1' })).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: CREATE_MOVIE },
          { type: CREATE_MOVIE_FAIL, payload: 'Error message 2' },
        ]);
      });
    });
  });

  describe('editMovieAction', () => {
    test('success case', () => {
      jest
        .spyOn(helpers, 'doFetch')
        .mockImplementationOnce(() => Promise.resolve({ title: 'Movie 1' }));

      store.dispatch<TestDispatch>(editMovieAction({ title: 'Movie 1' })).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: EDIT_MOVIE },
          { type: EDIT_MOVIE_SUCCESS, payload: { title: 'Movie 1' } },
        ]);
      });
    });

    test('error case 1', () => {
      jest
        .spyOn(helpers, 'doFetch')
        .mockImplementationOnce(() => Promise.reject('Error message 1'));

      store.dispatch<TestDispatch>(editMovieAction({ title: 'Movie 1' })).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: EDIT_MOVIE },
          { type: EDIT_MOVIE_FAIL, payload: 'Error message 1' },
        ]);
      });
    });

    test('error case 2', () => {
      jest
        .spyOn(helpers, 'doFetch')
        .mockImplementationOnce(() => Promise.resolve({ messages: 'Error message 2' }));

      store.dispatch<TestDispatch>(editMovieAction({ title: 'Movie 1' })).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: EDIT_MOVIE },
          { type: EDIT_MOVIE_FAIL, payload: 'Error message 2' },
        ]);
      });
    });
  });

  describe('removeMovieAction', () => {
    test('success case', () => {
      jest
        .spyOn(helpers, 'doFetch')
        .mockImplementationOnce(() => Promise.resolve({ title: 'Movie 1' }));

      store.dispatch<TestDispatch>(removeMovieAction(1)).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: REMOVE_MOVIE },
          { type: REMOVE_MOVIE_SUCCESS },
        ]);
      });
    });

    test('error case', () => {
      jest.spyOn(helpers, 'doFetch').mockImplementationOnce(() => Promise.reject('Error message'));

      store.dispatch<TestDispatch>(removeMovieAction(1)).then(() => {
        expect(store.getActions()).toStrictEqual([
          { type: REMOVE_MOVIE },
          { type: REMOVE_MOVIE_FAIL, payload: 'Error message' },
        ]);
      });
    });
  });
});
