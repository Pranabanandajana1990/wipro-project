import React from 'react';
import './MovieDetails.style.css';
const MovieDetails = ({ MovieId, MovieName, LeadActor }) => {
  return (
    <div className='movie'>
      <p className='id'>{MovieId}</p>
      <h2 className='name'>{MovieName}</h2>
      <span className='actor'>{LeadActor}</span>
    </div>
  );
};

export default MovieDetails;
