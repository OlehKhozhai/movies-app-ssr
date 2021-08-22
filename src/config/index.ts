export const MOVIE_OPTIONS = ['edit', 'delete'];

export const TABS = ['all', 'documentary', 'comedy', 'horror', 'crime'] as const;

export const GENRES = ['Documentary', 'Comedy', 'Horror', 'Crime'];

export const DROPDOWN_OPTIONS = ['release date', 'rating'] as const;

export const DROPDOWN_OPTIONS_DEFINITION = {
  'release date': 'release_date',
  rating: 'vote_average',
};

export const BASE_URL = 'http://localhost:4000/movies';
