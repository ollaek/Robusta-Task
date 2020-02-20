import { useState } from "react";

import { getMoviesService, searchMoviesService } from "../services";

const useMoviesHook = () => {
  const initialState = [];

  const [movies, setMovies] = useState(initialState);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const getMovies = (term, year) => {
    if(term){
      searchMoviesService(term).then(res => {
        setMovies(res);
        setFilteredMovies(year ? movies.filter(_ => _.year === year) : movies);
      })
    }else{
      getMoviesService().then(res => {
        setMovies(res);
        setFilteredMovies(year ? movies.filter(_ => _.year === year) : movies);
      });
    }
  };

  return {
    movies: filteredMovies.length > 0 ? filteredMovies : movies,
    totalMovies: movies,
    getMovies
  };
};

export { useMoviesHook };
