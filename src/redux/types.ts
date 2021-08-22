export type Movie = {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: Array<string>;
  runtime: number;
};

export interface RootReducer {
  movies: Movie[];
  isMoviesLoading: boolean;
  movieDetails: Movie | null;
  error: null | string | Array<string>;
}

// GET_MOVIES
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAIL = 'GET_MOVIES_FAIL';
export interface GetMoviesAction {
  type: typeof GET_MOVIES;
  payload: {
    params: string;
  };
}
export interface GetMoviesSuccessAction {
  type: typeof GET_MOVIES_SUCCESS;
  payload: Movie[];
}
export interface GetMoviesFailAction {
  type: typeof GET_MOVIES_FAIL;
  payload: string;
}

// GET_MOVIE_DETAILS
export const GET_MOVIE_DETAILS = 'GET_MOVIE_DETAILS';
export const GET_MOVIE_DETAILS_SUCCESS = 'GET_MOVIE_DETAILS_SUCCESS';
export const GET_MOVIE_DETAILS_FAIL = 'GET_MOVIE_DETAILS_FAIL';
export interface GetMovieDetailsAction {
  type: typeof GET_MOVIE_DETAILS;
  payload: number;
}
export interface GetMovieDetailsSuccessAction {
  type: typeof GET_MOVIE_DETAILS_SUCCESS;
  payload: Movie;
}
export interface GetMovieDetailsFailAction {
  type: typeof GET_MOVIE_DETAILS_FAIL;
  payload: string;
}

// CREATE_MOVIE
export const CREATE_MOVIE = 'CREATE_MOVIE';
export const CREATE_MOVIE_SUCCESS = 'CREATE_MOVIE_SUCCESS';
export const CREATE_MOVIE_FAIL = 'CREATE_MOVIE_FAIL';
export interface CreateMovieAction {
  type: typeof CREATE_MOVIE;
  payload: Partial<Movie>;
}
export interface CreateMovieSuccessAction {
  type: typeof CREATE_MOVIE_SUCCESS;
}
export interface CreateMovieFailAction {
  type: typeof CREATE_MOVIE_FAIL;
  payload: string;
}

// EDIT_MOVIE
export const EDIT_MOVIE = 'EDIT_MOVIE';
export const EDIT_MOVIE_SUCCESS = 'EDIT_MOVIE_SUCCESS';
export const EDIT_MOVIE_FAIL = 'EDIT_MOVIE_FAIL';
export interface EditMovieAction {
  type: typeof EDIT_MOVIE;
  payload: Partial<Movie>;
}
export interface EditMovieSuccessAction {
  type: typeof EDIT_MOVIE_SUCCESS;
  payload: Movie;
}
export interface EditMovieFailAction {
  type: typeof EDIT_MOVIE_FAIL;
  payload: string;
}

// REMOVE_MOVIE
export const REMOVE_MOVIE = 'REMOVE_MOVIE';
export const REMOVE_MOVIE_SUCCESS = 'REMOVE_MOVIE_SUCCESS';
export const REMOVE_MOVIE_FAIL = 'REMOVE_MOVIE_FAIL';
export interface RemoveMovieAction {
  type: typeof REMOVE_MOVIE;
  payload: number;
}
export interface RemoveMovieSuccessAction {
  type: typeof REMOVE_MOVIE_SUCCESS;
}
export interface RemoveMovieFailAction {
  type: typeof REMOVE_MOVIE_FAIL;
  payload: string;
}

export type ActionTypes =
  | GetMoviesAction
  | GetMoviesSuccessAction
  | GetMoviesFailAction
  | GetMovieDetailsAction
  | GetMovieDetailsSuccessAction
  | GetMovieDetailsFailAction
  | CreateMovieAction
  | CreateMovieSuccessAction
  | CreateMovieFailAction
  | EditMovieAction
  | EditMovieSuccessAction
  | EditMovieFailAction
  | RemoveMovieAction
  | RemoveMovieSuccessAction
  | RemoveMovieFailAction;
