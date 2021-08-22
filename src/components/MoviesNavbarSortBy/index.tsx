import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import Dropdown from 'components/_common/Dropdown';
import { DROPDOWN_OPTIONS } from 'config';
import hooks from 'hooks';
import { prepareSearchQueryObject } from 'helpers/common';
import styles from './styles.module.scss';

type MoviesNavbarSortByProps = {
  className?: string;
};

const MoviesNavbarSortBy: React.FC<MoviesNavbarSortByProps> = ({ className }) => {
  const { replace: historyReplace, query } = useRouter();
  const { isOpen, onToggle, onClose } = hooks.useOpenAndClose();

  const handleOptionClick = React.useCallback(
    (option: string) => {
      historyReplace({
        query: prepareSearchQueryObject({
          query: query as Record<string, string>,
          params: [{ key: 'sortBy', value: option }],
        }),
      });
      onClose();
    },
    [query, onClose, historyReplace]
  );

  return (
    <div className={cn(styles.root, className)}>
      <span className={styles.label}>Sort By</span>

      <Dropdown
        options={DROPDOWN_OPTIONS}
        value={query.sortBy as string}
        isOpen={isOpen}
        onToggle={onToggle}
        onClose={onClose}
        onOptionClick={handleOptionClick}
      />
    </div>
  );
};

export default React.memo(MoviesNavbarSortBy);
