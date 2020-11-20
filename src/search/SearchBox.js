import { TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import React, { useState } from 'react';
import { searchMovies } from '../shared/API';
import styles from './SearchBox';

const MovieList = (props) => {
  return (
    <div>
      <ul>
        {props.movies.map((movie) => (
          <li className={styles.listItem} key={movie.id}>
            <b>{movie.title}</b> ({movie.release_date})
            <div>
              <img src={`http://image.tmdb.org/t/p/w154/${movie.poster_path}`} alt='logo' />
              </div>
            <Button
              className="Add Movie"
              color="secondary"
              onClick={(e) => {
                e.preventDefault();
                props.onMovieAdd(movie);
              }}
            >
              <AddIcon /> Add Movie
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SearchBox = (props) => {
  const [term, setTerm] = useState('');
  const [movies, setMovies] = useState([]);

  const localMovieAdd = (movie) => {
    setMovies([]);
    props.onMovieAdd(movie);
  };

  return (
    <div>
      <TextField
        variant="outlined"
        label="Search for a movie"
        value={term}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          searchMovies(term).then((res) => setMovies(res.data.results))
        }
      >
        Search
      </Button>
      <MovieList movies={movies} onMovieAdd={localMovieAdd} />
    </div>
  );
};

export default SearchBox;