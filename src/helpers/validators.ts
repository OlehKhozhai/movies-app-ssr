import * as Yup from 'yup';

export const createMovieValidationSchema = Yup.object({
  title: Yup.string().required('Title date is required').min(1).max(30),
  release_date: Yup.string().required('Release date is required'),
  poster_path: Yup.string().required('Poster url is required'),
  genres: Yup.array().of(Yup.string()).min(1).required(),
  overview: Yup.string().required('Overview is required'),
  runtime: Yup.number().required('Runtime is required'),
});
