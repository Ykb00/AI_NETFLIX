import { useDispatch, useSelector } from "react-redux"
import { addPopularMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../components/Constants"

const usePopularMovies = ()=> {
    const dispatch = useDispatch()

    const isNowPopularMovies = useSelector(store => store.movies.nowPopularMovies)


   
     const nowPopularMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
      const json = await data.json();
      
      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };
  useEffect(()=>{
    // eslint-disable-next-line
    (!isNowPopularMovies && nowPopularMovies())
     // eslint-disable-next-line
  },[])
}

export default usePopularMovies