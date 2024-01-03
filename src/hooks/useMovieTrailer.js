import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from 'react-redux';
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo);
    const getMovieVideos = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, API_OPTIONS);
        const result = await data.json();
        const trailers = result.results.filter((item) => item.type === 'Trailer');
        const trailer = trailers.length === 0 ? trailers[0]: result.results[0];
        dispatch(addTrailerVideo(trailer));
      }
    
      useEffect(()=>{
        if(!trailerVideo) getMovieVideos();
      }, [])
}

export default useMovieTrailer;