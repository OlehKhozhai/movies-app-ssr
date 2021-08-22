import { DROPDOWN_OPTIONS } from 'config';

export const capitalizeFirstLetter = (string: string): string =>
  string[0].toUpperCase() + string.slice(1);

export const cutOffFirstLetter = (string: string) => string.slice(1);

export const getErrors = (errorsArray: string[]) =>
  errorsArray.reduce((errors: Record<string, string>, error?: string) => {
    if (error) {
      const [, key, value] = error.split('"');
      errors[key] = value;
    }
    return errors;
  }, {});

export const getSearchParam = (query: string, key: string): string =>
  new URLSearchParams(query).get(key) || '';

export const prepareSearchQueryObject = ({
  query,
  params,
}: {
  query: Record<string, string>;
  params: Array<{ key: string; value: string }>;
}): Record<string, string> => {
  const searchParams = { ...query };

  params.forEach(({ key, value }) => {
    searchParams[key] = value;
  });

  return searchParams;
};

export const getQueryStringFromObject = (params: Record<string, string>) =>
  Object.keys(params).reduce((accumulator, queryKey, index) => {
    if (queryKey === 'id') {
      return accumulator;
    }

    return accumulator.concat(`${index === 0 ? '?' : '&'}${queryKey}=${params[queryKey]}`);
  }, '');

export const getSearchQueryObject = (query: Record<string, string>) => {
  const searchParams = { ...query };
  const activeTab = query.search;
  const sortBy = query.sortBy;

  if (!activeTab) {
    searchParams.searchBy = 'genres';
    searchParams.search = '';
  }

  if (!sortBy) {
    searchParams.sortBy = DROPDOWN_OPTIONS[0];
  }

  return searchParams;
};
