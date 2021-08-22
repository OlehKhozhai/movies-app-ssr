import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import Button from 'components/_common/Button';
import { prepareSearchQueryObject } from 'helpers/common';
import styles from './styles.module.scss';

type SearchProps = {
  className?: string;
};

const Search: React.FC<SearchProps> = ({ className }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSearchButtonClick = React.useCallback(() => {
    if (searchValue) {
      const searchParams = prepareSearchQueryObject({
        query: router.query as Record<string, string>,
        params: [
          { key: 'search', value: searchValue },
          { key: 'searchBy', value: 'title' },
        ],
      });
      router.replace({ query: searchParams });

      setSearchValue('');
    }
  }, [searchValue, router]);

  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        handleSearchButtonClick();
      }
    };

    global.addEventListener('keypress', handleKeyPress);

    return () => {
      global.removeEventListener('keypress', handleKeyPress);
    };
  }, [handleSearchButtonClick]);

  return (
    <div className={cn(styles.root, className)}>
      <input
        placeholder='What do you want to watch?'
        className={styles.input}
        value={searchValue}
        onChange={handleInputChange}
      />
      <Button
        title='Search'
        className={styles.button}
        disabled={!searchValue}
        onClick={handleSearchButtonClick}
      />
    </div>
  );
};

export default React.memo(Search);
