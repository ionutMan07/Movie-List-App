import axios from 'axios';

export const searchMovies = (query) => {
    const apiKey = process.env.REACT_APP_API_KEY
    const URL = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${query}`    
    return axios.get(URL)
}

