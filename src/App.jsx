import React, { useEffect, useState } from 'react';
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from './components/MovieCard';
//5cb2279

const api = "http://www.omdbapi.com?apikey=5cb2279";


function App() {
  
  const [searchMovie, setSearchMovie] = useState('')
  const [movies, setMovies] = useState([]);
  const bringData = async (title) => {
    const res = await fetch(`${api}&s=${title}`);
    const response = await res.json();
      setMovies(response.Search);
  } 



  useEffect( () => {
    bringData('batman');
  },[ ])


  return (
    <>
      <div className='app'>
        <h1 className='text-2xl'>Movies Hub</h1>
        <div className="search">
          <input type="text"
          placeholder='Search Movies'
          value={searchMovie}
          onChange={(e) => {setSearchMovie(e.target.value)}}
          />
          <img 
          src= {SearchIcon}
          alt="Search"
          onClick={() => {bringData(searchMovie)}}
           />
        </div>

        {
          movies?.length > 0 ? (
            <div className="container">
              {movies.map((movie) => 
                <MovieCard movie1={movie}></MovieCard>
              )}
              </div>
          ) : (
            <div className='empty'>
              <h1>No movies found!</h1>
            </div>
          )
        }




        
      </div>
    </>
  );
}

export default App;
