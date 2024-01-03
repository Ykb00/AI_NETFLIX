import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies) 

  return (
    <div className='bg-black'>
      <div className='relative z-20 mt-0 md:-mt-52'>
      <MovieList title={'Now Playing'}  movies={movies.nowPlayingMovies}/>
      <MovieList title={'Popular'}  movies={movies.nowPopularMovies}/>
      <MovieList title={'Top Rated'}  movies={movies.nowTrendingMovies}/>
      <MovieList title={'Upcoming'}  movies={movies.nowUpcomingMovies}/>
    </div>
    </div>
  )
}

export default SecondaryContainer
