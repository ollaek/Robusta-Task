import { moviesApi } from "../apis/moviesApi";

export const editMovieService = async (id, movie) => {
    const data =  await moviesApi.editMovie(id, movie);
    return data;
};