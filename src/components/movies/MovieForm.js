import React, { useState, useContext, useEffect } from 'react';
import { MovieContext } from './MovieContext'

const MovieForm = () => {
    const [movieName, setMovieName] = useState('')
    const [moviePrice, setMoviePrice] = useState('')
    const [isDisabled, updateDisabled] = useState(true)
    const { movieListArr, editMovie } = useContext(MovieContext);
    const [movieList, setMovieList] = movieListArr;
    const [editMovieId, setEditMovieId] = editMovie;

    useEffect(() => {
        if (editMovieId) {
            const movieObj = movieList.find((movie) => movie.id == editMovieId);
            setMovieName(movieObj.name);
            setMoviePrice(movieObj.price)
        }
    }, [editMovieId])

    useEffect(() => {
        let disabledBtn = true;
        if (movieName !== '' && moviePrice !== '') {
            disabledBtn = false;
        }
        updateDisabled(disabledBtn);
    }, [movieName, moviePrice])

    const resetFields = () => {
        setEditMovieId('');
        setMovieName('');
        setMoviePrice('');
        updateDisabled(true);
    }

    const addMovie = () => {
        const movieListCopy = JSON.parse(JSON.stringify(movieList));
        if (editMovieId) {
            const movieObj = movieListCopy.find((movie) => movie.id == editMovieId);
            movieObj.name = movieName;
            movieObj.price = moviePrice;
            setMovieList([...movieListCopy]);
            resetFields()

        } else {
            const movieObj = {
                id: Math.floor(Math.random() * 10000),
                name: movieName,
                price: moviePrice
            }
            setMovieList([...movieList, movieObj])
            resetFields()
        }
    }

    return (
        <div className="formContainer">
            <div className="fieldContainer">
                <label htmlFor="movieName">Movie Name:</label>
                <input type="text" id="movieName" value={movieName} onChange={({ target }) => setMovieName(target.value)} />
            </div>
            <div className="fieldContainer">
                <label htmlFor="moviePrice">Movie Name:</label>
                <input type="text" id="moviePrice" value={moviePrice} onChange={({ target }) => setMoviePrice(target.value)} />
            </div>
            <div className="buttonContainer">
                <button onClick={addMovie} className='addbtn' disabled={isDisabled}>{editMovieId ? 'Update' : 'Add'}</button>
            </div>
        </div>
    )
}
export default MovieForm