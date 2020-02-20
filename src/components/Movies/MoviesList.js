import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import SearchForm from "../Shared/SearchForm";
import YearsFilteration from "../Shared/YearsFilteration";
import { useMoviesHook } from "../../hooks";

const MoviesList = ({ history }) => {
  const { movies, totalMovies, getMovies } = useMoviesHook();

  const [term, setTerm] = useState("");
  let years = [];
  useEffect(
    () => {
      getMovies();
    },
    // eslint-disable-next-line
    []
  );

  const onSearchSubmit = () => {
    getMovies(term);
  };

  const FillYearsList = () => {
    totalMovies.map(movie => {
      if (!years.includes(movie.year)) {
        years.push(movie.year);
      }
    });
  };

  const RenderList = () => {
    if (movies.length > 0) {
      FillYearsList();
      return (
        <div className="ui grid " style={{marginTop:20}}>
          {movies.map(movie => {
            return <MovieCard movie={movie} key={movie.id} history={history} />;
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
        <SearchForm
          onSearchSubmit={() => onSearchSubmit()}
          onSetTerm={searchTerm => setTerm(searchTerm)}
        />
        <YearsFilteration
          years={years}
          onChangeSelect={value => {
            debugger;
            getMovies("", +value);
          }}
        />
      </div>
      {movies && RenderList()}
    </div>
  );
};

export default MoviesList;
