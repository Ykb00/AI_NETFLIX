import { useDispatch, useSelector } from "react-redux"
import { addTrailerVideo } from "../utils/moviesSlice"
import { useEffect } from "react"
import { API_OPTIONS } from "../components/Constants"


const useMovieTrailer = (movieId) => {
      const dispatch = useDispatch()

      const isTrailerVideo = useSelector(store => store.movies.trailerVideo)

  
  const getMovieVideos = async () => {
  const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId + '/videos?', API_OPTIONS)
  const json = await data.json()

  if (!json.results) {
      return null;
    }
  
      const filterData = json.results.filter((video) => video.type === 'Trailer');
      const trailer = filterData.length ? filterData[0] : json.results[0];

      dispatch(addTrailerVideo(trailer));
    
}



useEffect(()=>{
  (!isTrailerVideo && getMovieVideos(movieId))
  // eslint-disable-next-line
},[])
}

export default useMovieTrailer