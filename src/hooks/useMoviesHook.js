import { useState } from "react";

import { getMoviesService } from "../services";

const useMoviesHook = () => {
  const initialState = [];

  const [movies, setMovies] = useState(initialState);

  const getMovies = () => {
    getMoviesService().then(res => {
      setMovies(res);
    });
  };

  return {
    movies,
    getMovies
  };
};

export { useMoviesHook };
