import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignIn,setIsSignIn] = useState(true)

  const toggleSigninform = () => {
    setIsSignIn(!isSignIn);
  }


  return (
    <div  >
        <Header />
        <div className='absolute inset-0 w-full h-full overflow-hidden '>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/c31c3123-3df7-4359-8b8c-475bd2d9925d/15feb590-3d73-45e9-9e4a-2eb334c83921/IN-en-20231225-popsignuptwoweeks-perspective_alpha_website_large.jpg'
                alt='bg'
            />
        </div>
        <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-2xl bg-opacity-80'>
          <h1 className='font-bold text-xl py-4'>{isSignIn? 'Sign Up' : 'Sign In'}</h1>
            {isSignIn && <input type='text' placeholder='User Name' className='p-2 my-2 w-full bg-gray-600 rounded-lg'/>}
            <input type='text' placeholder='Email' className='p-2 my-2 w-full bg-gray-600 rounded-lg'/>
            <input type='password' placeholder='Password' className='p-2 my-2 w-full bg-gray-600 rounded-lg'/>
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg'>Submit</button>
            <p className='py-4 cursor-pointer hover:underline' onClick={toggleSigninform}>{isSignIn? 'Already have an account? Sign In Now':'Start Netflix now – Sign Up...'}</p>
        </form>
    </div>
  )
}

export default Login
