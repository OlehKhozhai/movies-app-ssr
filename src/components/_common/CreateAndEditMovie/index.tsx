import React from 'react';
import { Form, Formik, FormikHelpers, FormikProps } from 'formik';
import { useDispatch } from 'react-redux';

import Input from 'components/_common/FormFields/Input';
import Button from 'components/_common/Button';
import Select from 'components/_common/FormFields/Select';
import { createMovieAction, editMovieAction } from 'redux/actions';
import { Movie } from 'redux/types';
import { GENRES } from 'config';
import { createMovieValidationSchema } from 'helpers/validators';
import { getErrors } from 'helpers/common';
import styles from './styles.module.scss';

const defaultValues: Partial<Movie> = {
  title: '',
  release_date: '',
  poster_path: '',
  genres: [],
  overview: '',
  runtime: 0,
};

type CreateAndEditMovieProps = {
  action?: 'create' | 'edit';
  movieId?: number;
  initialValues?: Partial<Movie>;
  onSubmit: () => void;
};

const CreateAndEditMovie: React.FC<CreateAndEditMovieProps> = ({
  action = 'create',
  initialValues,
  movieId,
  onSubmit,
}) => {
  const dispatch = useDispatch();
  const formTitle = action === 'create' ? 'Add movie' : 'Edit movie';
  const initialFormValues = initialValues || defaultValues;

  const handleSubmit = async (
    values: Partial<Movie>,
    { setSubmitting, setErrors }: FormikHelpers<Partial<Movie>>
  ) => {
    let errors = null as unknown;

    setSubmitting(true);

    if (action === 'edit' && movieId) {
      errors = await dispatch<unknown>(editMovieAction({ ...values, id: movieId }));
    } else {
      errors = await dispatch<unknown>(createMovieAction(values));
    }

    if (!errors) {
      onSubmit();
      setSubmitting(false);
    } else {
      setErrors(getErrors(errors as string[]));
    }
  };

  return (
    <Formik
      initialValues={initialFormValues}
      validationSchema={createMovieValidationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }: FormikProps<Partial<Movie>>) => (
        <Form className={styles.root} data-testid="form">
          <h2 className={styles.title}>{formTitle}</h2>

          <Input name="title" label="Title" placeholder="Enter title" />
          <Input
            name="release_date"
            label="Release date"
            type="date"
            placeholder="Enter realise date"
          />
          <Input name="poster_path" label="Movie url" placeholder="Enter url" />
          <Select name="genres" label="Genre" placeholder="Choose Genres" options={GENRES} />
          <Input name="overview" label="Overview" placeholder="Enter overview" />
          <Input name="runtime" label="Runtime" placeholder="Enter runtime" type="number" />

          <div className={styles.buttonsWrapper}>
            <Button title="Reset" variation="primaryOutline" className={styles.resetBtn} />
            <Button
              title={action === 'create' ? 'Submit' : 'Save'}
              type="submit"
              disabled={isSubmitting}
            />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default React.memo(CreateAndEditMovie);
