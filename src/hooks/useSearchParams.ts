import { useEffect, useState } from 'react';
import * as router from 'next/router';

import { getSearchQueryObject, getQueryStringFromObject } from 'helpers/common';

const useSearchParams = (): {
  queryString: string;
  queryObject: Record<string, string>;
} => {
  const [queryString, setQueryString] = useState('');
  const [queryObject, setQueryObject] = useState({});
  const { query, isReady } = router.useRouter();

  useEffect(() => {
    if (isReady) {
      const searchQueryObject = getSearchQueryObject(query as Record<string, string>);
      const searchQueryString = getQueryStringFromObject(searchQueryObject);

      setQueryObject(searchQueryObject);
      setQueryString(searchQueryString);
    }
  }, [isReady, query]);

  return { queryString, queryObject };
};

export default useSearchParams;
