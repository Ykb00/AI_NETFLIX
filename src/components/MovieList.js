import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  
  return (
    <div className='px-6 bg-black'>
        <h1 className='text-lg md:text-xl font-bold py-3 text-white'>{title}</h1> 
      <div className='display:none flex overflow-x-scroll no-scrollbar'>
    
        
        <div className='flex '>{
            
            !movies? console.log('null movies'): movies.map((movie) => (<MovieCard key={movie.id} posterPath={movie.poster_path}/>))
          }
          
        </div>
      </div>
      
    </div>
  )
}
 
export default MovieList
