import React, {useContext} from 'react';
import {MoviesContext} from "../Context/MoviesContext.jsx";
import movies from "../pages/Movies.jsx";

const Movie = ({movie, index,handleMoveUp, handleMoveDown}) => {
    const {movies, setMovies} = useContext(MoviesContext);

    const handleClick = () => {
        setMovies(prevState => {
            const newArr = [...prevState];
            newArr.splice(index, 1);
            return newArr;
        })
    };

    return (
        <div>
            <h1>Movie</h1>
            Nom du film : {movie.name}, Date de sortie du film : {movie.year}
            <button onClick={handleClick}>X</button>
            {

            }
            <button onClick={()=>{handleMoveUp(index)}}>UP</button>
            <button onClick={()=>{handleMoveDown(index)}}>DOWN</button>
        </div>
    );
};

export default Movie;