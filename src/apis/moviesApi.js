import baseApi from "./baseApi";

const moviesApi = {
  getAllMovies: () =>
    baseApi.get("movies").then(res => {
      return res.data;
    }),
  createNewMovie: movie =>
    baseApi
      .post("movies", {
        title: movie.title,
        budget: movie.budget,
        year: movie.year,
        category_ids: movie.category_ids
      })
      .then(res => {
        return res.data;
      }),
  deleteMovie: id =>
    baseApi.delete(`movies/${id}`).then(res => {
      return res.data;
    }),
  editMovie: (id, movie) =>
    baseApi
      .put(`movies/${id}`, {
        title: movie.title,
        budget: movie.budget,
        year: movie.year,
        category_ids: movie.category_ids
      })
      .then(res => {
        return res.data;
      }),
  searchMovies: term =>
    baseApi.get(`movies?search=${term}`).then(res => {
      return res.data;
    })
};

export { moviesApi };
