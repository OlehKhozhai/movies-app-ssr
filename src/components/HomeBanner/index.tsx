import React from 'react';
import cn from 'classnames';

import Search from 'components/Search';
import Button from 'components/_common/Button';
import Logo from 'components/_common/Logo';
import Modal from 'components/_common/Modal';
import hooks from 'hooks';
import CreateAndEditMovie from 'components/_common/CreateAndEditMovie';
import styles from './styles.module.scss';

type HomeBannerProps = {
  className?: string;
};

const HomeBanner: React.FC<HomeBannerProps> = ({ className }) => {
  const { isOpen, onClose, onOpen } = hooks.useOpenAndClose();

  return (
    <>
      <div className={cn(styles.root, className)}>
        <div className={styles.header}>
          <Logo />
          <Button title="+ add movie" variation="secondary" onClick={onOpen} />
        </div>
        <h2 className={styles.title}>Find your movie</h2>
        <Search />
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <CreateAndEditMovie onSubmit={onClose} />
        </Modal>
      )}
    </>
  );
};

export default HomeBanner;
