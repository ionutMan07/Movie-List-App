import React, { useState } from 'react';
// import StarIcon from '@material-ui/icons/StarOutlined';
import Ratings from './Ratings';

const MovieList = (props) => {
  const FavoriteComponent = props.favoriteComponent;

  return (
    <>
      {props.movies.map((movie) => (
        <div className="image-container d-flex justify-content-center m-3">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div
            onClick={() => props.handleFavoritesClick(movie)}
            className="overlay align-items-center justify-content-center"
          >
            <FavoriteComponent />

            <div className="align-items-center justify-content-center">
              <Ratings />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
