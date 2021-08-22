import React from 'react';
import type { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import * as router from 'next/router';

import Footer from 'components/Footer';
import HomeBanner from 'components/HomeBanner';
import Divider from 'components/_common/Divider';
import MoviesNavbar from 'components/MoviesNavbar';
import MoviesList from 'components/MoviesList';
import { moviesSelector } from 'redux/selectors';
import { getMoviesAction } from 'redux/actions';
import useSearchParams from 'hooks/useSearchParams';

const Home: NextPage = () => {
  const { movies, isMoviesLoading } = useSelector(moviesSelector);
  const dispatch = useDispatch();
  const { replace: historyReplace } = router.useRouter();
  const { queryString } = useSearchParams();

  React.useEffect(() => {
    if (queryString) {
      historyReplace(queryString);
    }
  }, [queryString]);

  React.useEffect(() => {
    if (queryString) {
      dispatch(getMoviesAction({ params: queryString }));
    }
  }, [queryString, dispatch]);

  return (
    <>
      <HomeBanner />
      <Divider />
      <MoviesNavbar />
      <MoviesList movies={movies} isLoading={isMoviesLoading} />
      <Footer />
    </>
  );
};

export default Home;
