import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';
import { LOGIN_PAGE_BACKGROUND_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <div>
    <div className='fixed w-full -z-10'>
      <img className="h-screen w-full" src={LOGIN_PAGE_BACKGROUND_URL}
      alt='img'/>
    </div>
        <GptSearchBar />
        <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch