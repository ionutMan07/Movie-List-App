import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <div className="image-container d-flex justify-content-center m-3">
          <img
          className='rounded mx-auto d-block'
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div
            className="overlay align-items-center justify-content-center"
            onClick={() => props.handleFavoritesClick(movie)}
            color="secondary"
          >
            Add to Favorites
            <FavoriteIcon
              className="ml-4"
              onClick={() => props.handleFavoritesClick(movie)}
              color="secondary"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
