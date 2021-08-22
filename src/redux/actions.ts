import {
  GetMoviesSuccessAction,
  GET_MOVIES,
  GET_MOVIES_FAIL,
  GET_MOVIES_SUCCESS,
  GetMoviesAction,
  GetMovieDetailsAction,
  GET_MOVIE_DETAILS,
  GET_MOVIE_DETAILS_SUCCESS,
  GET_MOVIE_DETAILS_FAIL,
  GetMovieDetailsSuccessAction,
  GetMovieDetailsFailAction,
  GetMoviesFailAction,
  CreateMovieAction,
  CREATE_MOVIE_SUCCESS,
  CREATE_MOVIE_FAIL,
  CreateMovieSuccessAction,
  CreateMovieFailAction,
  CREATE_MOVIE,
  RemoveMovieAction,
  EditMovieAction,
  EditMovieFailAction,
  EditMovieSuccessAction,
  EDIT_MOVIE_SUCCESS,
  EDIT_MOVIE_FAIL,
  EDIT_MOVIE,
  RemoveMovieSuccessAction,
  REMOVE_MOVIE_FAIL,
  RemoveMovieFailAction,
  REMOVE_MOVIE,
  REMOVE_MOVIE_SUCCESS,
} from 'redux/types';
import helpers from 'helpers';

export type Dispatch = (data: unknown) => void;

export const getMoviesAction =
  ({ params }: GetMoviesAction['payload']) =>
  async (dispatch: Dispatch) => {
    dispatch({ type: GET_MOVIES });

    return helpers
      .doFetch({ params: `${params}&sortOrder=desc` })
      .then(({ data }) => {
        dispatch({
          type: GET_MOVIES_SUCCESS,
          payload: data,
        } as GetMoviesSuccessAction);
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIES_FAIL,
          payload: error,
        } as GetMoviesFailAction);
      });
  };

export const getMovieDetailsAction =
  (id: GetMovieDetailsAction['payload']) => (dispatch: Dispatch) => {
    dispatch({
      type: GET_MOVIE_DETAILS,
      payload: id,
    } as GetMovieDetailsAction);

    return helpers
      .doFetch({ params: `/${id}` })
      .then((movie) => {
        dispatch({
          type: GET_MOVIE_DETAILS_SUCCESS,
          payload: movie,
        } as GetMovieDetailsSuccessAction);
      })
      .catch((error) => {
        dispatch({
          type: GET_MOVIE_DETAILS_FAIL,
          payload: error,
        } as GetMovieDetailsFailAction);
      });
  };

export const createMovieAction =
  (movie: CreateMovieAction['payload']) => async (dispatch: Dispatch) => {
    dispatch({
      type: CREATE_MOVIE,
    });

    return helpers
      .doFetch({ method: 'POST', data: movie })
      .then((createdMovie) => {
        if (createdMovie.messages) {
          dispatch({
            type: CREATE_MOVIE_FAIL,
            payload: createdMovie.messages,
          } as CreateMovieFailAction);

          return createdMovie.messages;
        } else {
          dispatch({
            type: CREATE_MOVIE_SUCCESS,
            payload: createdMovie,
          } as CreateMovieSuccessAction);
        }
      })
      .catch((error) => {
        dispatch({
          type: CREATE_MOVIE_FAIL,
          payload: error,
        } as CreateMovieFailAction);

        return error;
      });
  };

export const editMovieAction =
  (movie: EditMovieAction['payload']) => async (dispatch: Dispatch) => {
    dispatch({
      type: EDIT_MOVIE,
    });

    return helpers
      .doFetch({ method: 'PUT', data: movie })
      .then((updatedMovie) => {
        if (updatedMovie.messages) {
          dispatch({
            type: EDIT_MOVIE_FAIL,
            payload: updatedMovie.messages,
          } as EditMovieFailAction);

          return updatedMovie.messages;
        } else {
          dispatch({
            type: EDIT_MOVIE_SUCCESS,
            payload: updatedMovie,
          } as EditMovieSuccessAction);
        }
      })
      .catch((error) => {
        dispatch({
          type: EDIT_MOVIE_FAIL,
          payload: error,
        } as EditMovieFailAction);
      });
  };

export const removeMovieAction = (id: RemoveMovieAction['payload']) => (dispatch: Dispatch) => {
  dispatch({
    type: REMOVE_MOVIE,
  });

  return helpers
    .doFetch({ method: 'DELETE', params: `/${id}` })
    .then(() => {
      dispatch({
        type: REMOVE_MOVIE_SUCCESS,
      } as RemoveMovieSuccessAction);
    })
    .catch((error) => {
      dispatch({
        type: REMOVE_MOVIE_FAIL,
        payload: error,
      } as RemoveMovieFailAction);
    });
};
