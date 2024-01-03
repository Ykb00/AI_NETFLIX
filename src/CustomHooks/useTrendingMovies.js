import { useDispatch, useSelector } from "react-redux"
import {  addTrendingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../components/Constants"

const useTrendingMovies = ()=> {
    const dispatch = useDispatch()

    const isnowtrendingMovies = useSelector(store => store.movies.nowTrendingMovies)

     const nowTrendingMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS);
      const json = await data.json();
      
      dispatch(addTrendingMovies(json.results));
    } catch (error) {
      console.error("Error fetching Trending movies:", error);
    }
  };
  useEffect(()=>{
    // eslint-disable-next-line
    (!isnowtrendingMovies && nowTrendingMovies())
  },[])
}

export default useTrendingMovies