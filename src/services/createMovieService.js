import { moviesApi } from "../apis/moviesApi";

export const createMovieService = async (movie) => {
    const data =  await moviesApi.createNewMovie(movie);
    console.log(data);
    return data;
};