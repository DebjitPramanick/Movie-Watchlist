import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

export const MovieControls = ({movie,type}) => {

    const  {removeMovie, markWatched, movetoWatchlist, removeWatched,} = useContext(GlobalContext);

    return (
        <div className="inner-card-controls">
            {type === 'watchlist' && (
                <>
                    <button className="ctrl-btn" onClick={() => markWatched(movie)}>
                        <i className="fa-fw far fa-eye"></i>
                    </button>

                    <button className="ctrl-btn" onClick={() => removeMovie(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}

            {type === "watched" && (
                <>
                    <button className="ctrl-btn" onClick={() => movetoWatchlist(movie)}>
                        <i className="fa-fw far fa-eye-slash"></i>
                    </button>
                    <button className="ctrl-btn" onClick={() => removeWatched(movie.id)}>
                        <i className="fa-fw fa fa-times"></i>
                    </button>
                </>
            )}
        </div>
    )
}
