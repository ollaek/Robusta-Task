import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import {useMoviesHook} from "../../hooks/useMoviesHook";

const MoviesList = () => {
  const { movies, getMovies } = useMoviesHook();

  useEffect(()=>{
      getMovies();
  },
  //
  []);

  const RenderList = () => {
    if (movies.length > 0) {
      return (
        <div className="ui grid ">
          {movies.map(movie => {
            return <MovieCard movie={movie} key={movie.id}/>;
          })}
        </div>
      );
    } else {
      return <div>No Movies To Show</div>;
    }
  };
  return (
    <div className="ui container">
      <h1 className="ui" style={{ textAlign: "center", margin: "2rem" }}>
        Movies
      </h1>
      <div className="row">
        <Link
          to="/create"
          className="ui right labeled icon button right floated"
          style={{ marginBottom: 15 }}
        >
          <i className="right plus icon"></i>
          add
        </Link>
      </div>
      {RenderList()}
    </div>
  );
};

export default MoviesList;
