import { moviesApi } from "../apis/moviesApi";

export const getMoviesService = async () => {
    const data =  await moviesApi.getAllMovies();
    return data;
};