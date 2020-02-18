import { createMovieService } from "../services";

const useCreateMovieHook = () => {
  
  const createMovie = (movie) => {
    createMovieService(movie).then(res => {
      //toaster
    });
  };

  return {
    createMovie
  };
};

export { useCreateMovieHook };
