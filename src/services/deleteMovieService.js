import { moviesApi } from "../apis/moviesApi";

export const deleteMovieService = async (id) => {
    const data =  await moviesApi.deleteMovie(id);
    return data;
};