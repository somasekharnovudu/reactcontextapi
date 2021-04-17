import React, { createContext, useState } from 'react';

export const MovieContext = createContext();


export const MovieListProvider = (props) => {
    const [movieList, setMovieList] = useState([]);
    const [movieId, setMovieId] = useState('');
    return (
        <MovieContext.Provider value={{ movieListArr: [movieList, setMovieList], editMovie: [movieId, setMovieId] }
        }>
            { props.children}
        </MovieContext.Provider >
    )
}