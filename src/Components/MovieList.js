import React from 'react'

const MovieList = (props) => {

    return (
        <div>
        {props.movies.map((movie,index)=> (
        <div className='d-flex justify-content-start m-3'>
            <div>
            <span><h6><b>{movie.title}</b></h6></span>
            <span>{movie.release_date}</span>
            </div>
            <div>
                <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt = {movie.title}></img>
            </div>
        </div>
        ))}
        </div>
    );
}

export default MovieList