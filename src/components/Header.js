import React, { useEffect } from 'react'
import { sendSignInLinkToEmail, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL, LANGUAGE_OPTIONS } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate = useNavigate();
  // Subscribe to the store and get user
  const user = useSelector(store=>store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }
  useEffect(()=>{
    // Call firebase onAuthCHanged API
    const unsubscribe =onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser);
        navigate("/")
      }
    });
    // /Unsubscribe when component unmounts
    return () => unsubscribe();
    
  },[])
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between'>
      <img className="w-44" src={NETFLIX_LOGO_URL} alt='img' />
      {user && (
      <div className='flex flex-row gap-x-2'>
        {showGptSearch && (<select className='flex m-6 px-6 bg-gray-600 text-white' onChange={handleLanguageChange}>
          {
            LANGUAGE_OPTIONS.map((language) => <option value={language.value}>{language.displayName}</option>)
          }
        </select>)}
        <button className="py-2 px-4 mx-5 my-5 bg-purple-800 text-white rounded-lg"
        onClick={handleGptSearchClick}>{showGptSearch ? 'GPT search': 'Dashboard'}</button>
        <div>
        <img src={user?.photoURL} alt='img' />
        </div>
        <div>
        <button onClick={handleSignOut} className='text-white font-bold'>(Sign Out)</button>
        </div>
      </div>)}
    </div>
  )
}

export default Header