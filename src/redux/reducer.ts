import {
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_FAIL,
  GET_MOVIE_DETAILS_SUCCESS,
  CREATE_MOVIE,
  CREATE_MOVIE_FAIL,
  CREATE_MOVIE_SUCCESS,
  EDIT_MOVIE,
  EDIT_MOVIE_FAIL,
  EDIT_MOVIE_SUCCESS,
  REMOVE_MOVIE,
  REMOVE_MOVIE_SUCCESS,
  REMOVE_MOVIE_FAIL,
} from './types';
import { ActionTypes, GET_MOVIES, RootReducer } from 'redux/types';

export const initialState: RootReducer = {
  movies: [],
  isMoviesLoading: false,
  movieDetails: null,
  error: null,
};

export default (state = initialState, action: ActionTypes): RootReducer => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        isMoviesLoading: true,
        error: null,
      };
    case GET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isMoviesLoading: false,
      };
    case GET_MOVIES_FAIL:
      return {
        ...state,
        movies: [],
        isMoviesLoading: false,
        error: action.payload,
      };

    case GET_MOVIE_DETAILS:
      return { ...state, error: null };
    case GET_MOVIE_DETAILS_SUCCESS:
      return {
        ...state,
        movieDetails: action.payload,
      };
    case GET_MOVIE_DETAILS_FAIL:
      return {
        ...state,
        movieDetails: null,
        error: action.payload,
      };

    case CREATE_MOVIE:
    case EDIT_MOVIE:
    case REMOVE_MOVIE:
    case REMOVE_MOVIE_SUCCESS:
    case CREATE_MOVIE_SUCCESS:
      return { ...state, error: null };
    case EDIT_MOVIE_SUCCESS:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload.id ? action.payload : movie
        ),
        movieDetails:
          state.movieDetails?.id === action.payload.id ? action.payload : state.movieDetails,
      };
    case CREATE_MOVIE_FAIL:
    case EDIT_MOVIE_FAIL:
    case REMOVE_MOVIE_FAIL:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
