import { BASE_URL } from 'config';

type DoFetch = {
  url?: string;
  params?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  data?: unknown;
};

export const doFetch = async ({ url = BASE_URL, method = 'GET', params = '', data }: DoFetch) => {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json',
    };
  }

  return fetch(`${url}${params}`, options).then((res) => res.json());
};
