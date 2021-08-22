import React from 'react';
import cn from 'classnames';

import Button from 'components/_common/Button';
import Logo from 'components/_common/Logo';
import styles from './styles.module.scss';
import { Movie } from 'redux/types';

type MovieDetailsBannerProps = {
  movie: Movie;
  className?: string;
};

const MovieDetailsBanner: React.FC<MovieDetailsBannerProps> = ({ movie, className }) => {
  return (
    <div className={cn(styles.root, className)}>
      <header className={styles.header}>
        <Logo />
        <Button title="Search" linkTo="/" />
      </header>

      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <img className={styles.image} src={movie.poster_path} />
        </div>

        <div>
          <h2 className={styles.title}>{movie.title}</h2>
          <span className={styles.genre}>
            {movie.genres.map((genre) => (
              <span key={genre}> {genre} |</span>
            ))}
          </span>

          <div className={styles.warnRow}>
            <span className={styles.year}>{movie.release_date}</span>
            <span>{movie.runtime}</span>
          </div>

          <p className={styles.description}>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MovieDetailsBanner);
