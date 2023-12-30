import React from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

const Header = () => {
  const navigate = useNavigate();
  // Subscribe to the store and get user
  const user = useSelector(store=>store.user)
  console.log('user', user)
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
    
  }
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black w-screen z-10 flex justify-between'>
      <img className="w-44" src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='img' />
      {user && (<div className='flex flex-row gap-x-2'>
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