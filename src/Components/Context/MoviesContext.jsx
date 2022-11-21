import React, {useContext} from "react";


export const MoviesContext = React.createContext();

export const MoviesProvider = ({initialValue, children}) => {

    return (
        <MoviesContext.Provider value={{
            ...initialValue,
        }}>
            {children}
        </MoviesContext.Provider>
    )
}

export const useMovies = () => {
    return useContext(MoviesContext);
}