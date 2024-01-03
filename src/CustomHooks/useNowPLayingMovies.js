import { useDispatch, useSelector } from "react-redux"
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../components/Constants"

const useNowPlayingMovies = ()=> {
    const dispatch = useDispatch()


    const isnowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies)

     const nowPlayingMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
      const json = await data.json();
      
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Error fetching now playing movies:", error);
    }
  };
  useEffect(()=>{
    // eslint-disable-next-line
    (!isnowPlayingMovies && nowPlayingMovies())
    // eslint-disable-next-line
  },[])
}

export default useNowPlayingMovies