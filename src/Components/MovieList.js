import React from 'react';

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div className="d-flex justify-content-start m-3">
          <img
            src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
            alt={movie.title}
          ></img>
          <div>
            <span>
              <b>{movie.title}</b>
            </span>
            <br></br>
            <span> Release date: {movie.release_date}</span>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
