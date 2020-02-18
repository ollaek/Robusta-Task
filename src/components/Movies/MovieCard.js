import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="three wide column" style={{ textAlign: "center" }}>
      <div className="ui card">
        <div className="content">
          <div className="header">{movie.Name}</div>
        </div>
        <div className="content">
          <div className="ui small feed">
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a href="/">Year : </a> {movie.Year}
                </div>
              </div>
            </div>
            <div className="event">
              <div className="content">
                <div className="summary">
                  <a href="/">Budget : </a> {movie.Budget} $
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
