import React, {useState, useEffect} from 'react'
import { fetchFeaturedMovies } from '../services/api';
import MovieCard from '../utility/MovieCard'
import './Home.css'
import SearchBar from '../utility/SearchBar';
function Home() {
    const [movieslist, setMovieslist] = useState([]);
    useEffect(() => {
        fetchFeaturedMovies().then(data => setMovieslist(data?.results));
       
    }, []);
   
    return (
        <div className='home'> 
        <SearchBar/>
    <div className='movie-grid'>
        {movieslist.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
        </div>
    )
}

export default Home
