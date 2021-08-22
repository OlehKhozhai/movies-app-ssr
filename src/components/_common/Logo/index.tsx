import React from 'react';
import cn from 'classnames';
import Link from 'next/link';

import styles from './styles.module.scss';

type LogoProps = { className?: string };

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link href='/'>
      <a className={cn(styles.root, className)}>
        <span className={styles.bold}>netflix</span>roulete
      </a>
    </Link>
  );
};

export default React.memo(Logo);
