import React, { useEffect } from 'react';
import Logo from '../assets/Logo.png';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from './Constants';
import { toggleGPTsearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store)=> store.user)
  const ShowGPT = useSelector(store=> store.gpt.showGPTsearch)

const handleLanguageChange =(e)=>{
  dispatch(changeLanguage(e.target.value))
}



  const handleGPTsearchClick =()=>{
    dispatch(toggleGPTsearchView())
  }

  const handleSignOut=()=> {
    signOut(auth).then(() =>{
      navigate('/')
    }).catch((error)=>{
      navigate('error')
    })
  }

  useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, (user)=>{
        if (user){
          const { uid , email, displayName } = user
          dispatch(addUser({ uid:uid , email: email, displayName:displayName }));
          navigate('/browse')
        }
        else{
          dispatch(removeUser())
          navigate('/')
        }
      })

      return () => unSubscribe();
      // eslint-disable-next-line
    },[])


  return (
    <div className='absolute flex items-center flex-col md:flex-row justify-between w-full bg-gradient-to-b from-black z-10'>
      <img
        className={ !user ? 'w-1/6': 'w-1/12'}
        src={Logo}
        alt='logo'
      />

      {user && (<div className='flex items-center space-x-1 '>
        {ShowGPT && <select className='bg-gray-900 p-2 text-white m-2' onChange={handleLanguageChange}>
          {console.log("handled lang change")}
          {SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier}value={lang.identifier}>{lang.name}</option> )}
        </select>}
        
        <button 
          onClick={handleGPTsearchClick}
        className='w-15 p-2 m-2 bg-gradient-to-r from-red-700 text-white rounded-lg hover:bg-red-700'>{!ShowGPT? 'AI Search': "Go Back"}</button>
        <img
          
          className='hidden md:block w-12 h-12 p-1 my-6 cursor-pointer'
          src={LOGO}
          alt='usericon'
        />
        {/* <div className='absolute invisible group-hover:visible top-full left-1/2 transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md'>
            Welcome {user.displayName} 
        </div> */}
        <button onClick={handleSignOut} className='text-white p-2 m-2 hover:font-bold'>Sign Out</button>
      </div>)}
    </div>
  );
}

export default Header;
