import React, { useEffect } from "react";

const MovieDetails = props => {
  const movieId = props.match.params.id;
  useEffect(
    () => {
      if (movieId) {
      }
    },
    // eslint-disable-next-line
    []
  );
  return <div>hamada</div>;
};

export default MovieDetails;
