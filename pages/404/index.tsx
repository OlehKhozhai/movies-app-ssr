import React from 'react';

import Button from 'components/_common/Button';
import Logo from 'components/_common/Logo';
import styles from './styles.module.scss';

const NotFound = () => {
  return (
    <div className={styles.root}>
      <Logo className={styles.logo} />
      <h2 className={styles.title}>Page not found</h2>
      <Button title="Go back to home" linkTo="/" variation="primaryOutline" />
    </div>
  );
};

export default React.memo(NotFound);
