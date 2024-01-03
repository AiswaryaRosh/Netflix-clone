import { useEffect } from 'react';
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const useTopRatedMovies = () => {
  const dispath = useDispatch();
  const topRatedMovies = useSelector((store)=>store.movies.topRatedMovies);
  const getTopRatedMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await res.json();
    dispath(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    if(!topRatedMovies) getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;