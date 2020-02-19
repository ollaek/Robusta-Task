import { editMovieService } from "../services";

const useEditMovieHook = () => {
  
  const editMovie = (id, movie) => {
    editMovieService(id, movie).then(res => {
      //toaster
    });
  };

  return {
    editMovie
  };
};

export { useEditMovieHook };
