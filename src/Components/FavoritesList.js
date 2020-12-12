import React from 'react';
import TrashIcon from '@material-ui/icons/Delete';
import Ratings from './Ratings';

const FavoritesList = (props) => {
  
  return (
    <>
      {props.movies.map((movie) => (
        <div className="image-container d-flex justify-content-center m-2"
        key={movie.id}>
          <img
            className="rounded mx-auto d-block item"
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div className="overlay align-items-center justify-content-center">
            Remove from favorites
            <TrashIcon
              className="ml-4"
              onClick={() => props.handleFavoritesClick(movie)}
            />
            <div className="align-items-center justify-content-center">
              <Ratings movie={movie}/>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FavoritesList;
