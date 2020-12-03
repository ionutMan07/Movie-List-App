import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';
// import { searchMovies } from './shared/API';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderSearchAppBar from './shared/Header';
import AddFavorites from './Components/AddFavorites';
import RemoveFavorites from './Components/RemoveFavorites';

// import axios from 'axios';


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);

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
		const newFavouriteList = [...favorites, movie];
		setFavorites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavoriteMovie = (movie) => {
		const newFavoriteList = favorites.filter(
			(favorite) => favorite.imdbID !== movie.imdbID
		);

		setFavorites(newFavoriteList);
		saveToLocalStorage(newFavoriteList);
	};

  return (
    <div className="container-fluid movie-app">
      <div className="col">
        <HeaderSearchAppBar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </div>
      <div className="col">
        <h1>Movie List</h1>
        <MovieList movies={movies} 
        handleFavoritesClick={addFavoriteMovie}
        favoriteComponent={AddFavorites}/>
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
				<h1>Favorites</h1>
			</div>
			<div className='row'>
				<MovieList
					movies={favorites}
					handleFavoritesClick={removeFavoriteMovie}
					favoriteComponent={RemoveFavorites}
				/>
        </div>
    </div>
  );
};

export default App;
