import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="three wide column" style={{ textAlign: "center" }}>
      <div className="ui card">
        <div className="content">
          <div className="header">{movie.title}</div>
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
