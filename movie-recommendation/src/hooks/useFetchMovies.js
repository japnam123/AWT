import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "79010b54";  

const useFetchMovies = (searchQuery) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return { movies, loading, error };
};

export default useFetchMovies;
