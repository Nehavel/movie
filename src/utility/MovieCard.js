import React from 'react'
import './MovieCard.css'

const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <div id={`${movie?.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie?.title} />
          <h4>{movie?.title}</h4>
        </div>
        </div>
    );
}
  
export default MovieCard
