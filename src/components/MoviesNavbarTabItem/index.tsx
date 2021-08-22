import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type MoviesNavbarTabItemProps = {
  title: string;
  isActive: boolean;
  className?: string;
  onTabClick: (tab: string) => void;
};

const MoviesNavbarTabItem: React.FC<MoviesNavbarTabItemProps> = ({
  title,
  isActive,
  className,
  onTabClick,
}) => {
  const handleTabClick = () => {
    onTabClick(title);
  };

  return (
    <li
      className={cn(styles.root, className, {
        [styles.active]: isActive,
      })}
      onClick={handleTabClick}
    >
      {title}
    </li>
  );
};

export default React.memo(MoviesNavbarTabItem);
