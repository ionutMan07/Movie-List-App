import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';
// import { searchMovies } from './shared/API';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderSearchAppBar from './shared/Header';
import axios from 'axios';
import { ContactSupportOutlined } from '@material-ui/icons';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('star wars');

  const searchMovies = async (searchValue) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchValue}`;
    const response = await fetch(URL);
    const responseJson = await response.json();
    
   if(responseJson.results){
     setMovies(responseJson.results)
  };
}

  useEffect(() => {
    searchMovies(searchValue);
  }, [searchValue]);

  return (
    <div className="container-fluid movie-app">
      <div className="col">
        <HeaderSearchAppBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="col">
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default App;
