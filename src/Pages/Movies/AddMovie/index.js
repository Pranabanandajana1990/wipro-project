import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useFormik } from 'formik';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalAppContext } from '../../../';
import './AddMovie.style.css';
const AddMovie = () => {
  const {
    state: { movies },
    setState,
  } = useContext(GlobalAppContext);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      movieId: '',
      movieName: '',
      leadActor: '',
    },
    onSubmit: (values) => {
      setState([
        ...movies,
        {
          MovieName: values.movieName,
          MovieId: values.movieId,
          LeadActor: values.leadActor,
        },
      ]);
      history.push('/');
    },
  });

  return (
    <div>
      <form className='add-form' onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          name='movieId'
          label='ID'
          value={formik.values.movieId}
          onChange={formik.handleChange}
          error={formik.touched.movieId && Boolean(formik.errors.movieId)}
          helperText={formik.touched.movieId && formik.errors.movieId}
          variant='outlined'
          autoComplete='disabled'
        />
        <TextField
          fullWidth
          name='movieName'
          label='Movie Name'
          value={formik.values.movieName}
          onChange={formik.handleChange}
          error={formik.touched.movieName && Boolean(formik.errors.movieName)}
          helperText={formik.touched.movieName && formik.errors.movieName}
          variant='outlined'
          autoComplete='disabled'
        />
        <TextField
          fullWidth
          name='leadActor'
          label='Lead Actor'
          value={formik.values.leadActor}
          onChange={formik.handleChange}
          error={formik.touched.leadActor && Boolean(formik.errors.leadActor)}
          helperText={formik.touched.leadActor && formik.errors.leadActor}
          variant='outlined'
          autoComplete='disabled'
        />
        <Button color='primary' variant='outlined' fullWidth type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddMovie;
