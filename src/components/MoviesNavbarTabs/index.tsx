import React from 'react';
import cn from 'classnames';
import { useRouter } from 'next/router';

import MoviesNavbarTabItem from 'components/MoviesNavbarTabItem';
import { TABS } from 'config';
import { prepareSearchQueryObject } from 'helpers/common';
import styles from './styles.module.scss';

type MoviesNavbarTabsProps = {
  className?: string;
};

const MoviesNavbarTabs: React.FC<MoviesNavbarTabsProps> = ({ className }) => {
  const { replace: historyReplace, query } = useRouter();
  const activeTab = query.search;

  const handleTabClick = React.useCallback(
    (tab) => {
      const newSearchParams = prepareSearchQueryObject({
        query: query as Record<string, string>,
        params: [
          { key: 'search', value: tab === 'all' ? '' : tab },
          { key: 'searchBy', value: 'genres' },
        ],
      });

      historyReplace({ query: newSearchParams });
    },
    [historyReplace, query]
  );

  return (
    <ul className={cn(styles.root, className)}>
      {TABS.map((tab) => {
        const allTabsIsActive = activeTab === '' && tab === 'all';

        return (
          <MoviesNavbarTabItem
            key={tab}
            title={tab}
            isActive={activeTab === tab || allTabsIsActive}
            onTabClick={handleTabClick}
          />
        );
      })}
    </ul>
  );
};

export default React.memo(MoviesNavbarTabs);
