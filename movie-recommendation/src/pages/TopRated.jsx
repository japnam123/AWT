import React from "react";
import MovieList from "d:/FY MCA/MCA SEM2/React/Module1/movie-recommendation/src/components/movieList";

const TopRated = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">🏆 Top Rated Movies</h1>
      <MovieList searchQuery="Oscar" />
    </div>
  );
};

export default TopRated;
