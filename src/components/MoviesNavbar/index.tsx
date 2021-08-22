import React from 'react';
import cn from 'classnames';

import MoviesNavbarTabs from 'components/MoviesNavbarTabs';
import MoviesNavbarSortBy from 'components/MoviesNavbarSortBy';
import styles from './styles.module.scss';

type MoviesNavbarProps = {
  className?: string;
};

const MoviesNavbar: React.FC<MoviesNavbarProps> = ({ className }) => {
  return (
    <nav className={cn(styles.root, className)}>
      <MoviesNavbarTabs />
      <MoviesNavbarSortBy />
    </nav>
  );
};

export default React.memo(MoviesNavbar);
