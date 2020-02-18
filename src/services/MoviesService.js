import { moviesApi } from "../apis/moviesApi";

export const MoviesServices = async () => {
    const data =  await moviesApi.getAllMovies();
    return data;
};