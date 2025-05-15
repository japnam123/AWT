import React from "react";
import MovieList from "d:/FY MCA/MCA SEM2/React/Module1/movie-recommendation/src/components/movieList";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-4">🎬 Movie Recommendation System</h1>
      <MovieList searchQuery="Avengers" />
    </div>
  );
};

export default Home;
