import { useEffect } from 'react';
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { useSelector } from "react-redux";

const usePopularMovies = () => {
  const dispath = useDispatch();
  const popularMovies = useSelector((store)=>store.movies.popularMovies);
  const getPopularMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await res.json();
    dispath(addPopularMovies(json.results));
  };
  useEffect(() => {
    if(!popularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;