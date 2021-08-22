import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useDispatch } from 'react-redux';

import hooks from 'hooks';
import Dropdown from 'components/_common/Dropdown';
import DeleteMovie from 'components/_common/DeleteMovie';
import Modal from 'components/_common/Modal';
import CreateAndEditMovie from 'components/_common/CreateAndEditMovie';
import { MOVIE_OPTIONS } from 'config';
import { Movie } from 'redux/types';
import { removeMovieAction } from 'redux/actions';
import styles from './styles.module.scss';

type MoviesListItemProps = Movie & {
  className?: string;
};

const MoviesListItem: React.FC<MoviesListItemProps> = ({
  className,
  id,
  poster_path,
  title,
  genres,
  release_date,
  runtime,
  overview,
}) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { value, isDropdownVisible, onOptionClick, onToggleDropdownVisibility, onCloseDropdown } =
    hooks.useDropdown();
  const {
    isOpen: isOpenDeleteMovieModal,
    onClose: onCloseDeleteMovieModal,
    onOpen: onOpenDeleteMovieModal,
  } = hooks.useOpenAndClose({ onCloseCallback: () => onOptionClick('') });
  const {
    isOpen: isOpenEditMovieModal,
    onClose: onCloseEditMovieModal,
    onOpen: onOpenEditMovieModal,
  } = hooks.useOpenAndClose({ onCloseCallback: () => onOptionClick('') });

  const handleClickOnMovie = () => {
    router.push({
      pathname: `/movie-details/[id]`,
      query: { ...router.query, id },
    });
    window.scrollTo({ behavior: 'smooth', top: 0 });
  };

  const handleOnConfirmMovieRemove = React.useCallback(() => {
    onCloseDeleteMovieModal();
    dispatch(removeMovieAction(id));
  }, [id, dispatch, onCloseDeleteMovieModal]);

  React.useEffect(() => {
    if (value === 'edit') {
      onOpenEditMovieModal();
    }
    if (value === 'delete') {
      onOpenDeleteMovieModal();
    }
  }, [value, onOpenEditMovieModal, onOpenDeleteMovieModal]);

  return (
    <>
      <li className={cn(styles.root, className)} onClick={handleClickOnMovie}>
        <Dropdown
          options={MOVIE_OPTIONS}
          isOpen={isDropdownVisible}
          onToggle={onToggleDropdownVisibility}
          onClose={onCloseDropdown}
          onOptionClick={onOptionClick}
          className={styles.dropdown}
        />

        {poster_path && (
          <Image
            src={poster_path}
            alt={title}
            className={styles.image}
            layout='responsive'
            width={330}
            height={495}
          />
        )}

        <div className={styles.titleAndImageWrapper}>
          <h4 className={styles.title}>{title}</h4>
          <span className={styles.year}>{release_date}</span>
        </div>

        <h5 className={styles.genre}>
          {genres.map((genre) => (
            <span key={genre}> {genre} |</span>
          ))}
        </h5>
      </li>

      {isOpenDeleteMovieModal && (
        <Modal isOpen={isOpenDeleteMovieModal} onClose={onCloseDeleteMovieModal}>
          <DeleteMovie onConfirm={handleOnConfirmMovieRemove} />
        </Modal>
      )}

      {isOpenEditMovieModal && (
        <Modal isOpen={isOpenEditMovieModal} onClose={onCloseEditMovieModal}>
          <CreateAndEditMovie
            action='edit'
            movieId={id}
            initialValues={{
              title,
              genres,
              overview,
              poster_path,
              release_date,
              runtime: runtime || 0,
            }}
            onSubmit={onCloseEditMovieModal}
          />
        </Modal>
      )}
    </>
  );
};

export default React.memo(MoviesListItem);
