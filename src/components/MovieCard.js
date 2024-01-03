import React from 'react'
import { IMG_CDN } from './Constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-40 pr-3'>
      
      <img 
        alt='movie card'
        src={IMG_CDN + posterPath}
      />
    </div>
  )
}

export default MovieCard