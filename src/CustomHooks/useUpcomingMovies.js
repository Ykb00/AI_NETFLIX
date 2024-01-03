import { useDispatch, useSelector } from "react-redux"
import {  addUpcomingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../components/Constants"

const useUpcomingMovies = ()=> {
    const dispatch = useDispatch()

    const isUpcomingMovies = useSelector(store => store.movies.nowUpcomingMovies)

     const nowUpcomingMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS);
      const json = await data.json();
      
      dispatch(addUpcomingMovies(json.results));
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
    }
  };
  useEffect(()=>{
    // eslint-disable-next-line
    (!isUpcomingMovies && nowUpcomingMovies())
  },[])
}

export default useUpcomingMovies