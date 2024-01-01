import React from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
    <Header />
    {showGptSearch ? <GptSearch /> : <>
    <MainContainer />
    <SecondaryContainer />
    </>}
   
    </div>
   
    /**
     * MainContainer
     *  - videoBackground
     *  - videoTitle
     * SecondaryContainer
     *  - MovieList * n
     *    - cards * n
     */
  )
}

export default Browse