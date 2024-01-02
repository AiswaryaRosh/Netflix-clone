import React, {useRef} from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from "react-redux";
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };
  const handleGptSearchClick = async() => {
    console.log(searchText.current.value);
    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    
    if(!gptResults.choices) {
      // error handling
    }

    // Andaz Apna Apna, Hera Pheri, Chupke Chupke, Jaane Bhi Do Yaaro, Padosan
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    // ["Andaz Apna Apna", "Hera Pheri", "Chupke Chupke", "Jaane Bhi Do Yaaro", "Padosan"]

    // For each movie I will search TMDB API

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]

    const tmdbResults = await Promise.all(promiseArray);

    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );

  };
  const searchText = useRef(null);
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className='w-1/2 bg-black flex items-baseline' onSubmit={(e) => e.preventDefault()}>
            <input type='text' ref={searchText} className='p-4 m-4 flex basis-4/5' placeholder={lang[selectedLanguage].gptSearchPlaceHolder} />
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg flex'
            onClick={handleGptSearchClick}
            >{lang[selectedLanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar