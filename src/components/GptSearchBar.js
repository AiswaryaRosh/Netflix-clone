import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const selectedLanguage = useSelector((store) => store.config.lang);
  return (
    <div className='pt-[20%] flex justify-center'>
        <form className='w-1/2 bg-black flex items-baseline'>
            <input type='text' className='p-4 m-4 flex basis-4/5' placeholder={lang[selectedLanguage].gptSearchPlaceHolder} />
            <button className='py-2 px-4 bg-red-700 text-white rounded-lg flex'>{lang[selectedLanguage].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar