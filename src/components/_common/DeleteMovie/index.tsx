import React from 'react';

import Button from 'components/_common/Button';
import styles from './styles.module.scss';

type DeleteMovieProps = {
  onConfirm: () => void;
};

const DeleteMovie: React.FC<DeleteMovieProps> = ({ onConfirm }) => {
  return (
    <>
      <h2 className={styles.title}>Delete movie</h2>
      <h5 className={styles.subTitle}>Are you sure you want to delete this movie?</h5>
      <Button title="Confirm" className={styles.button} onClick={onConfirm} />
    </>
  );
};

export default React.memo(DeleteMovie);
