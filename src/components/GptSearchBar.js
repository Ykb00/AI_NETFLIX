import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import lang from './LanguageConstants'
import openai from '../utils/openai'
import ErrorPage from '../components/ErrorPage'
import { API_OPTIONS } from './Constants'
import { addGPTmovieResult } from '../utils/gptSlice'


const GptSearchBar = () => {
  const dispatch = useDispatch()
    const langKey = useSelector((store)=> store.config.lang)
    console.log(langKey)
    const searchText = useRef('')
    const prompt = "Act as a movie recommendation system and suggest some movies for the query : "
     + searchText.current.value 
     +". Only give me 5 movies, comma seperated like the given Example result given ahead. The example results: Gadar, Sholay, Don, Koi Mil Gaya, Golmaal "

    const searchmovieTMDB = async (movie) => {
      const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie +"&include_adult=false&language=en-US&page=1",API_OPTIONS)
      const json = await data.json()

      return json.results
    
    }




    const handleGPTsearchClick = async() => {
      if (!searchText.current) return null;

      const prompt = "Act as a movie recommendation system and suggest some movies for the query : "
     + searchText.current.value 
     +". Only give me 5 movies, comma seperated like the given Example result given ahead. The example results: Gadar, Sholay, Don, Koi Mil Gaya, Golmaal "

      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user' , content:prompt }],
        model: 'gpt-3.5-turbo',
      } )

        if (!gptResults.choices){ <ErrorPage />}

        const gptMovies = gptResults.choices?.[0]?.message?.content.split(',')

        const promiseArray = gptMovies.map((movie)=> searchmovieTMDB(movie) )

        
        const tmdb_results = await Promise.all(promiseArray)
        
        

        dispatch(addGPTmovieResult({movieNames: gptMovies, movieResults: tmdb_results}))
    }

    

  return (
    <div className='pt-[35%] md:p-[10%] flex justify-center '>
        <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-xl' onSubmit={(e)=> e.preventDefault()}>
            <input type='text' placeholder={lang[langKey].gptSearchPlaceholder} 
                className='p-4 m-4 col-span-9 rounded-xl'
                ref={searchText}
            />
            <button className='p-4 m-4 bg-red-700 col-span-3 text-white rounded-lg hover:bg-opacity-85'
              onClick={handleGPTsearchClick}
            >{lang[langKey].search}</button>
        </form>

    </div>
  )
}

export default GptSearchBar