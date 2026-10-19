
import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";
import MovieDetails from "./components/MovieDetails";
import "./App.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

function App() {
  // State variables
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSearch, setActiveSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch popular movies or search results
  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");

        if (!API_KEY) {
          throw new Error("TMDB API key is missing.");
        }

        let url;

        if (activeSearch) {
          url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(activeSearch)}`;
        } else {
          url = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
        }

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        setMovies(data.results || []);

      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
          setMovies([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchMovies();

    return () => controller.abort();
  }, [activeSearch]);

  // Handle movie search
  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();
    setActiveSearch(query);
    setSelectedMovie(null);
  };

  // Open movie details popup
  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  // Close movie details popup
  const closeMovieDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="app">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">Movie Explorer</h1>
        <p>Discover Movies</p>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>Discover Your Next Favorite Movie</h1>
        <p>Explore movies, ratings, and more!</p>

        <form
          className="search-bar"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search for a movie..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
          />

          <button type="submit">
            Search
          </button>
        </form>
      </header>

      {/* Movie Section */}
      <main className="movie-section">

        <h2>
          {activeSearch
            ? `Search Results for "${activeSearch}"`
            : "Popular Movies"}
        </h2>

        {/* Loading Message */}
        {loading && (
          <p>Loading movies...</p>
        )}

        {/* Error Message */}
        {error && (
          <p className="error">{error}</p>
        )}

        {/* No Movies Found */}
        {!loading &&
          !error &&
          movies.length === 0 && (
            <p>No movies found. Try another search.</p>
          )}

        {/* Display Movie Cards */}
        {!loading &&
          !error &&
          movies.length > 0 && (
            <div className="movie-grid">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={openMovieDetails}
                />
              ))}
            </div>
          )}

      </main>

      {/* Movie Details Popup */}
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={closeMovieDetails}
        />
      )}

    </div>
  );
}

export default App;
