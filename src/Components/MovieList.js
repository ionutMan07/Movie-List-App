import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

const MovieList = (props) => {
  const filterMovies = props.movies.filter(
    (movie) => movie.poster_path !== null
  );
  
  return (
    <>
      {filterMovies.map((movie) => (
        <div className="image-container d-flex justify-content-center m-3">
          <img
            className="rounded mx-auto d-block item"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div
            className= 'overlay align-items-center justify-content-center'
            onClick={() => props.handleFavoritesClick(movie)}
            color="secondary"
          >
            <p><span><b>Release: </b>{movie.release_date}</span><span><b> Rated:</b> {movie.vote_average}</span></p>
            Add to Favorites
            <FavoriteIcon
              className="ml-4"
              onClick={() => props.handleFavoritesClick(movie)}
              color="secondary"
            />          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
