import React,{createContext, useReducer, useEffect} from "react";
import AppReducer from "./AppReducer";

const initialState = {
    watchlist: localStorage.getItem('watchlist') 
    ? JSON.parse(localStorage.getItem('watchlist'))
    : [] ,
    watched: localStorage.getItem('watched') 
    ? JSON.parse(localStorage.getItem('watched'))
    : [] ,
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
    const[state,dispatch] = useReducer(AppReducer,initialState);

    useEffect(() => {
        localStorage.setItem('watchlist',JSON.stringify(state.watchlist));
        localStorage.setItem('watched',JSON.stringify(state.watched));
    },[state]);

    const addMovie = (movie) => {
        dispatch({type: "ADD_MOVIE_TO_WATCHLIST", payload:movie});
    }

    const removeMovie = (id) => {
        dispatch({type:"REMOVE_MOVIE_FROM_WATCHLIST", payload:id})
    }

    const markWatched = (movie) => {
        dispatch({type:"ADD_MOVIE_TO_WATCHED", payload:movie})
    }

    const movetoWatchlist = (movie) =>{
        dispatch({type: "MOVE_TO_WATCHLIST", payload:movie})
    }

    const removeWatched = (id) =>{
        dispatch({type: "REMOVE_MOVIE_FROM_WATCHED", payload:id})
    }

    return (
        <GlobalContext.Provider value={{ 
            watchlist: state.watchlist, 
            watched: state.watched, 
            addMovie,
            removeMovie,
            markWatched,
            movetoWatchlist,
            removeWatched,
            }}>
            {props.children}
        </GlobalContext.Provider>
    )
}