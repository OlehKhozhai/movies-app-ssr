import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from 'components/Footer';
import MovieDetailsBanner from 'components/MovieDetailsBanner';
import Divider from 'components/_common/Divider';
import MoviesNavbar from 'components/MoviesNavbar';
import MoviesList from 'components/MoviesList';
import { getMovieDetailsAction, getMoviesAction } from 'redux/actions';
import { movieDetailsSelector, moviesSelector } from 'redux/selectors';
import useSearchParams from 'hooks/useSearchParams';

const MovieDetails = () => {
  const dispatch = useDispatch();
  const movieDetails = useSelector(movieDetailsSelector);
  const { movies, isMoviesLoading } = useSelector(moviesSelector);

  const {
    queryString,
    queryObject: { id: movieId },
  } = useSearchParams();

  React.useEffect(() => {
    if (movieId) {
      dispatch(getMovieDetailsAction(+movieId));
    }
  }, [movieId, dispatch]);

  React.useEffect(() => {
    if (queryString) {
      dispatch(getMoviesAction({ params: queryString }));
    }
  }, [queryString, dispatch]);

  return (
    <>
      {movieDetails && <MovieDetailsBanner movie={movieDetails} />}
      <Divider />
      <MoviesNavbar />
      <MoviesList movies={movies} isLoading={isMoviesLoading} />
      <Footer />
    </>
  );
};

export default React.memo(MovieDetails);
