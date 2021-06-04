import React, { useContext } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { GlobalAppContext } from '../../';
import MovieDetails from '../../components/MovieDetails';
import './Movies.style.css';

const Movies = () => {
  const { state } = useContext(GlobalAppContext);
  const params = useParams();
  const history = useHistory();

  return (
    <>
      {params.MovieId ? (
        <div className='movies'>
          {state.movies
            .filter((movie) => movie.MovieId === params.MovieId)
            .map((movie) => (
              <MovieDetails key={movie.MovieId} {...movie} />
            ))}
        </div>
      ) : (
        <div className='movies'>
          {state.movies.map((movie) => (
            <div
              onClick={() => history.push(`/${movie.MovieId}`)}
              className='div'
            >
              <MovieDetails key={movie.MovieId} {...movie} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Movies;
