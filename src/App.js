import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';
import { searchMovies } from '../shared/API';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [movies, setMovies] = useState([]);

  return (
  <div className= 'container-fluid' 'movie-app'>
    <div className = 'row'>
    <MovieList movies = {movies} />
    </div>
  </div>
  );
}

export default App;
