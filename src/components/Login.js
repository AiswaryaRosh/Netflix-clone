import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isLoginForm, setisLoginForm] = useState(true);
  return (
  <div>
    <Header/>
    <div className='absolute w-full'>
      <img className="h-screen w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg"
      alt='img'/>
    </div>
    <form className='absolute w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
      <h1 className='font-bold text-3xl py-4'>{isLoginForm? 'Sign In': 'Sign Up'}</h1>
      {!isLoginForm && <input type='text' name='fullname' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
      <input type='text' name='email' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
      <input type='password' name='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
      <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isLoginForm? 'Sign In': 'Sign Up'}</button>

      {isLoginForm? <div className='py-10 text-gray-500'>New to Netflix? <span className='text-white' onClick={() => {setisLoginForm(!isLoginForm)}}>Sign up Now</span></div>: <div className='py-10 text-white' onClick={() => {setisLoginForm(!isLoginForm)}}>Already Registered <span>Sign in Now</span></div>}
    </form>
  </div>
  )
}

export default Login