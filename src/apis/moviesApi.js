import baseApi from "./baseApi";

const moviesApi = {
  getAllMovies: () =>
    baseApi.get("movies").then(res => {
      return res.data;
    })
};

export { moviesApi };
