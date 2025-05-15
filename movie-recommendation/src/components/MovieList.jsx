import React, { useState } from "react";
import useFetchMovies from "../hooks/useFetchMovies";

const MovieList = ({ searchQuery }) => {
  const { movies, loading, error } = useFetchMovies(searchQuery);
  const [selectedMovies, setSelectedMovies] = useState([]);

  const toggleMovieSelection = (movie) => {
    setSelectedMovies((prev) =>
      prev.includes(movie) ? prev.filter((m) => m !== movie) : [...prev, movie]
    );
  };

  if (loading) return <p className="text-center">Loading movies...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className={`p-3 bg-gray-800 rounded-lg cursor-pointer ${
            selectedMovies.includes(movie.Title) ? "border-2 border-red-500" : ""
          }`}
          onClick={() => toggleMovieSelection(movie.Title)}
        >
          <img className="w-full rounded-md" src={movie.Poster} alt={movie.Title} />
          <h3 className="text-white text-sm mt-2">{movie.Title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
