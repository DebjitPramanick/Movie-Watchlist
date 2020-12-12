import React, {useState} from 'react'

const base = "https://api.themoviedb.org/3/search/movie"

export const Add = () => {
    const [query,setQuery] = useState('');
    const [results,setResults] = useState([]);

    const Search = (e) =>{
        e.preventDefault();

        setQuery(e.target.value);

        fetch(`${base}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then( (resp)=>resp.json() )
        .then( (data)=>console.log(data) );
    }

    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                        <input type="text" placeholder="Search for a movie..." 
                        value={query} onChange={Search}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add