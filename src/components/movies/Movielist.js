import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';



const MovieList = () => {
    const { movieListArr, editMovie } = useContext(MovieContext);

    const [movieList, setMovieList] = movieListArr;
    const [editMovieId, setEditMovieId] = editMovie;

    const deleteMovie = (id) => {
        const filteredList = movieList.filter(movieObj => movieObj.id !== id);
        setMovieList([...filteredList])
    }

    return (
        <div className="movieListContainer">
            {
                movieList.map((movie) => (
                    <div key={movie.id} className="movieContainer">
                        <h3>Movie Name: {movie.name}</h3>
                        <p>Ticket Price: {movie.price}</p>
                        <button className="update" onClick={() => setEditMovieId(movie.id)}>Edit</button>
                        <button className="delete" onClick={() => deleteMovie(movie.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
};
export default MovieList;