import { useState } from "react";

import { MoviesServices } from "../services/MoviesService";

const useMoviesHook = () => {
  const initialState = [];

  const [movies, setMovies] = useState(initialState);

  const getMovies = () => {
    MoviesServices().then(res => {
      setMovies(res);
    });
  };

  return {
    movies,
    getMovies
  };
};

export { useMoviesHook };
