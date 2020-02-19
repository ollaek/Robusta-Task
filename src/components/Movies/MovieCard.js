import React from "react";

import { useDeleteMovieHook } from "../../hooks";

const MovieCard = ({ movie, history }) => {
  const { deleteMovie } = useDeleteMovieHook();

  const DeleteMovie = () => {
    if (window.confirm(`Are you sure you want to delete ${movie.title} ?`)) {
      deleteMovie(movie.id);
    }
  };

  const EditMovie = () => {
    localStorage.setItem("movie", JSON.stringify(movie));
    history.push(`/Edit/${movie.id}`);
  };
  return (
    <div className="three wide column" style={{ textAlign: "center" }}>
      <div className="ui card">
        <div className="content">
          <div className="header">{movie.title}</div>
          <span
            data-tooltip="Edit"
            data-position="left center"
            onClick={() => EditMovie()}
          >
            <i className="pencil alternate icon"></i>
          </span>
          <span
            data-tooltip="Delete"
            data-position="right center"
            onClick={() => DeleteMovie()}
          >
            <i className="trash alternate icon"></i>
          </span>
        </div>
        <div className="content">
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a href="/">Year : </a> {movie.year}
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a href="/">Budget : </a> {movie.budget} $
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
