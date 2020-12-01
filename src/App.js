import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';
// import { searchMovies } from './shared/API';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderSearchAppBar from './shared/Header';
import axios from 'axios';

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const searchMovies = (searchValue) => {
    const apiKey = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchValue}`    
    if(axios.get(URL)){
      return setMovies(axios.get(URL))
    }
  }
    useEffect(() =>{
      searchMovies(searchValue);
    },[searchValue]);

  return (
  <div className= 'container-fluid movie-app'>
    <div className ='row'>
      <HeaderSearchAppBar searchValue={searchValue} setSearchValue={setSearchValue}/>
    </div>
    <div className = 'row'>
    <MovieList movies = {movies} />
    </div>
  </div>
  );
}

export default App;
