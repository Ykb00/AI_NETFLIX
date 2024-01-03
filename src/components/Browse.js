import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../CustomHooks/useNowPLayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../CustomHooks/usePopularMovie';
import useUpcomingMovies from '../CustomHooks/useUpcomingMovies';
import useTrendingMovies from '../CustomHooks/useTrendingMovies';
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux';


const Browse = () => {
  const showGPTSearch = useSelector(store => store.gpt.showGPTsearch)
  useNowPlayingMovies(); 
  usePopularMovies();
  useUpcomingMovies();
  useTrendingMovies();


  return (
    <div className=''>
      <Header />
      {showGPTSearch ? 
      <GptSearch /> :
       <>
       <MainContainer />
      <SecondaryContainer />
      </>
      }
      
    </div>
  ) 
}

export default Browse