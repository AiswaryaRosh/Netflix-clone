import React from 'react';
import { MOVIE_CARD_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 p-4'>
        <img alt="Movie Card" src={MOVIE_CARD_URL+posterPath} />
    </div>
  )
}

export default MovieCard