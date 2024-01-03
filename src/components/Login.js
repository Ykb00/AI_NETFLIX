import React, { useReducer, useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"
import {auth} from '../utils/firebase'

import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'
import { BG } from './Constants'

const Login = () => {
  const dispatch = useDispatch()

  const [isSignIn,setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleValidation = () => {
    const message = checkValidData(email.current.value,password.current.value)
    setErrorMessage(message)

    if (message ) return;

    if(isSignIn){
      //sign up logic
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " "+ errorMessage)
      })
    } else {
      //sign in logic
       signInWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value
        }).then(()=> {
          const { uid , email, displayName } = auth.currentUser
          dispatch(addUser({ uid:uid , email: email, displayName:displayName }));
          
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/invalid-credential' ){
          setErrorMessage("Passwords do not match")
        }
        
      })
    }
  }

  const toggleSigninform = () => {
    setIsSignIn(!isSignIn);
  }


  return (
    <div  >
        <Header />
        <div className='absolute inset-0 w-full h-full overflow-hidden '>
            <img 
            className='w-full h-full object-cover'
                src={BG}
                alt='bg'
            />
        </div>
        <form onSubmit={(e)=> e.preventDefault()} className='absolute  w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0  text-white rounded-2xl bg-opacity-80'>
          <h1 className='font-bold text-xl py-4'>{isSignIn? 'Sign Up' : 'Sign In'}</h1>
            {isSignIn && <input type='text' ref={name} placeholder='User Name' className='p-2 my-2 w-full bg-gray-600 rounded-lg'/>}
            <input type='text' ref={email} placeholder='Email' className='p-2 my-2 w-full bg-gray-600 rounded-lg'/>
            <input type='password' ref={password} placeholder='Password' className='p-2 my-2 w-full bg-gray-600 rounded-lg'/>
            <p className='text-xs text-red-600 font-bold'>{errorMessage}</p>
            <button className='p-4 my-4 bg-red-700 w-full rounded-lg' onClick={handleValidation}>Submit</button>
            <p className='py-4 cursor-pointer hover:underline' onClick={toggleSigninform}>{isSignIn? 'Already have an account? Sign In Now':'Start Netflix now – Sign Up...'}</p>
        </form>
    </div>
  )
}


export default Login
