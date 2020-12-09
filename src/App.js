import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';
import HeaderSearchBar from './Components/Header';
import FavoritesList from './Components/FavoritesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

  const searchMovies = async (searchValue) => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchValue}`;
    const response = await fetch(URL);
    const responseJson = await response.json();

    if (responseJson.results) {
      setMovies(responseJson.results);
    }
  };

  useEffect(() => {
    searchMovies(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('react-movie-app-favorites')
    );

    if (movieFavorites) {
      setFavorites(movieFavorites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-movie-app-favorites', JSON.stringify(items));
  };

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  const removeFavoriteMovie = (movie) => {
    const newFavoriteList = favorites.filter(
      (favorite) => favorite.id !== movie.id
    );

    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
  };

  return (
    <div className="container-fluid movie-app">
      <HeaderSearchBar
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <div className="row">Movie List
        <MovieList movies={movies} handleFavoritesClick={addFavoriteMovie} />
      </div>
      <h3 className="ml-4"> Favorites 💖</h3>
      <div className="row">
        <FavoritesList
          movies={favorites}
          handleFavoritesClick={removeFavoriteMovie}
        />
      </div>
    </div>
  );
};

export default App;
