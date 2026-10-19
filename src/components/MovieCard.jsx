
function MovieCard({ movie, onClick }) {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;

    const rating =
        typeof movie.vote_average === "number"
            ? movie.vote_average.toFixed(1)
            : "N/A";

    const releaseYear =
        movie.release_date?.slice(0, 4) || "N/A";

    const handleMovieClick = () => {
        if (typeof onClick === "function") {
            onClick(movie);
        }
    };

    return (
        <button
            type="button"
            className="movie-card"
            onClick={handleMovieClick}
            aria-label={`View details for ${movie.title}`}
        >
            {/* Movie Poster */}
            {posterUrl ? (
                <img
                    src={posterUrl}
                    alt={`${movie.title} poster`}
                    loading="lazy"
                />
            ) : (
                <div className="no-poster">
                    No poster available
                </div>
            )}

            {/* Movie Information */}
            <div className="movie-info">
                <h3>{movie.title}</h3>

                <p className="movie-rating">
                    ⭐ {rating} / 10
                </p>

                <p className="movie-year">
                    Release Year: {releaseYear}
                </p>

                <span className="view-details">
                    View Details →
                </span>
            </div>
        </button>
    );
}

export default MovieCard;
