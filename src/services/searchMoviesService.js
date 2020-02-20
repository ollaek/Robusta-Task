import { moviesApi } from "../apis/moviesApi";

export const searchMoviesService = async (term) => {
    const data =  await moviesApi.searchMovies(term);
    return data;
};