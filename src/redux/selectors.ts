import { AppStore } from 'redux/store';

export const moviesSelector = (store: AppStore) => ({
  movies: store.movies,
  isMoviesLoading: store.isMoviesLoading,
});

export const movieDetailsSelector = (store: AppStore) => store.movieDetails;

export const errorSelector = (store: AppStore) => store.error;
