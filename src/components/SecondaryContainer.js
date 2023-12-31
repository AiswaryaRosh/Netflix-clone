import React from 'react';
import MovieList from './MovieList';
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className='bg-black'>
      {/**
       * MovieList - Popular
       *  MovieCard * n
       * MovieList - Now Playing
       * MovieList - Trending
       * MovieList - Horror
       */}
       <div className='-mt-100 relative z-20'>
       <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
       </div>
       <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
       <MovieList title={"Popular"} movies={movies.popularMovies}/>
       <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>
       <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer