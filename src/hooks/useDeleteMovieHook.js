import { deleteMovieService } from "../services";

const useDeleteMovieHook = () => {
  
  const deleteMovie = (id) => {
    deleteMovieService(id).then(res => {
      //toaster
      window.location.reload();
    });
  };

  return {
    deleteMovie
  };
};

export { useDeleteMovieHook };
