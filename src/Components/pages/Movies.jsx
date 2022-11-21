import React, {useState} from 'react';
import FormMovie from "../Movies/FormMovie.jsx";
import {MoviesProvider} from "../Context/MoviesContext";
import ListMovie from "../Movies/ListMovie.jsx";

const Movies = () => {
    const [movies, setMovies] = useState([
        // {
        //     name: "name",
        //     year: "2001",
        // },
    ])
    const handleMoveUp = (id) =>{
        if(id !== 0){
            let oldMovies = movies
            let newMovies = []
            oldMovies.forEach((movie,i)=>{
                if(i===id-1){
                    newMovies.push(oldMovies[id])
                }else if(i === id){
                    newMovies.push(oldMovies[i-1])
                }else{
                    newMovies.push(oldMovies[i])
                }
            })
            setMovies(newMovies)
        }
    }
    const handleMoveDown = (id) =>{
        if(id !== movies.length){
            let oldMovies = movies
            let newMovies = []
            oldMovies.forEach((movie,i)=>{
                if(i===id+1){
                    newMovies.push(oldMovies[id])
                }else if(i === id){
                    newMovies.push(oldMovies[i+1])
                }else{
                    newMovies.push(oldMovies[i])
                }
            })
            setMovies(newMovies)
        }
    }
    return (
        <div>
            <h1>Movies</h1>
            <MoviesProvider
                initialValue={{
                    movies,
                    setMovies
                }}
            >
                <FormMovie movies={movies} setMovies={setMovies}/>
                <ListMovie movies={movies} handleMoveDown={handleMoveDown} handleMoveUp={handleMoveUp}/>
            </MoviesProvider>
        </div>
    );
};

export default Movies;