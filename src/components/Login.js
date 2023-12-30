import React from 'react';
import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile   } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Login = () => {
  const dispatch = useDispatch()
  const [isLoginForm, setisLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonCLick = () => {
    console.log(email);
    console.log(password)
    const errorMsg = checkValidateData(email.current.value, password.current.value);
    setErrorMessage(errorMsg);
    if(errorMsg) return;
    if(!isLoginForm) {
      // Sign Up
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIK-gKqiOFvj94u0RqOASdgJJyjfWye96qX5CdB43UVLg=s83-c-mo"
          }).then(() => {
            // Profile updated!
            const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
          }).catch((error) => {
            // An error occurred
            // ...
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+":"+errorMessage);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+":"+errorMessage);
        });
    }

  }
  return (
  <div>
    <Header/>
    <div className='absolute w-full'>
      <img className="h-screen w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      alt='img'/>
    </div>
    <form className='absolute w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' onSubmit={(e)=>e.preventDefault()}>
      <h1 className='font-bold text-3xl py-4'>{isLoginForm? 'Sign In': 'Sign Up'}</h1>
      {!isLoginForm && <input type='text' name='fullname' ref={name} placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
      <input type='text' name='email' ref={email} placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
      <input type='password' name='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
      <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonCLick}>{isLoginForm? 'Sign In': 'Sign Up'}</button>

      <p className='text-red-500'>{errorMessage}</p>

      {isLoginForm? <div className='py-10 text-gray-500'>New to Netflix? <span className='text-white' onClick={() => {
        setErrorMessage(null)
        setisLoginForm(!isLoginForm)}
        }>Sign up Now</span></div>: <div className='py-10 text-white' onClick={() => {setisLoginForm(!isLoginForm)}}>Already Registered <span>Sign in Now</span></div>}
    </form>
  </div>
  )
}

export default Login