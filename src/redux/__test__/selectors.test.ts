import { initialState } from 'redux/reducer';
import { moviesSelector, errorSelector, movieDetailsSelector } from 'redux/selectors';

describe('Selectors unit testing', () => {
  test('moviesSelector', () => {
    expect(moviesSelector(initialState)).toStrictEqual({
      movies: [],
      isMoviesLoading: false,
    });
  });

  test('errorSelector', () => {
    expect(errorSelector(initialState)).toEqual(null);
  });

  test('movieDetailsSelector', () => {
    expect(movieDetailsSelector(initialState)).toBe(null);
  });
});
