import React from 'react';
import cn from 'classnames';

import MoviesListItem from 'components/MoviesListItem';
import { Movie } from 'redux/types';
import styles from './styles.module.scss';

type MoviesListProps = {
  movies: Movie[];
  isLoading: boolean;
  className?: string;
};

const MoviesList: React.FC<MoviesListProps> = ({ movies, isLoading, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      {movies.length > 0 && (
        <>
          <h3 className={styles.counter}>{movies.length} movies found</h3>

          {movies.map((movie) => {
            return <MoviesListItem key={movie.id} {...movie} />;
          })}
        </>
      )}

      {movies.length === 0 && !isLoading && (
        <h2 className={styles.noMovieFound}>No movies found</h2>
      )}

      {isLoading && <h2>Loading</h2>}
    </div>
  );
};

export default React.memo(MoviesList);
