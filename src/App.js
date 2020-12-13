import React, { useState, useEffect } from 'react';
import MovieList from './Components/MovieList';
import HeaderSearchBar from './Components/Header';
import FavoritesList from './Components/FavoritesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [favorites, setFavorites] = useState([]);
  // const [isHidden, setHidden] = useState(true)
  const [open, setOpen] = useState(false);

  const classes = useStyles();

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
  const localKey = JSON.parse(
    localStorage.getItem('react-movie-app-favorites')
  );

  const checkAndAddFavoriteMovie = (movie) => {
    if (localKey) {
      if (localKey.some((item) => item.id === movie.id)) {
        alert('Already in favorite list!');
      } else {
        addFavoriteMovie(movie);
      }
    } else {
      addFavoriteMovie(movie);
    }
  };
  const handleOpen = () => {
    console.log('open');
    setOpen(true);
  };

  const handleClose = () => {
    console.log('close');
    setOpen(false);
  };
  // const hidden = isHidden? 'hidden': 'show ';

  const addFavoriteMovie = (movie) => {
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
    saveToLocalStorage(newFavoriteList);
    handleOpen();
    // handleClose();
    // setHidden(false);
    // setTimeout(() => setHidden(true)
    // ,2000);
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
      <div className="row">
        <MovieList
          movies={movies}
          handleFavoritesClick={checkAndAddFavoriteMovie}
        />
      </div>
      <h3 className="ml-4"> Favorites 💖</h3>
      <div className="row">
        <FavoritesList
          movies={favorites}
          handleFavoritesClick={removeFavoriteMovie}
        />
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Your movie</h2>
            <p id="transition-modal-description">
              Has been added to Favorite List
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default App;
