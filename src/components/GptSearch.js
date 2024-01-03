import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG } from './Constants'

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
            <img 
            className='w-full h-full object-cover'
                src={BG}
                alt='bg'
            />
    </div>
      
      <div className=''>
      <GptSearchBar />
      <GptMovieSuggestions />
      
    </div>
    </>
  )
}

export default GptSearch