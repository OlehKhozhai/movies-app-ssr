import React from 'react';

import Logo from 'components/_common/Logo';
import styles from './styles.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.root}>
      <Logo />
    </footer>
  );
};

export default React.memo(Footer);
