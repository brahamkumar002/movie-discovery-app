
import { useEffect, useRef } from "react";

function MovieDetails({ movie, onClose }) {
    const closeButtonRef = useRef(null);
    const modalRef = useRef(null);

    // Close popup using Escape key
    useEffect(() => {
        if (!movie) return;

        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;

        // Prevent scrolling behind popup
        document.body.style.overflow = "hidden";

        // Focus the close button when popup opens
        closeButtonRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose();
            }

            // Keep keyboard focus inside the popup
            if (event.key === "Tab" && modalRef.current) {
                const focusableElements =
                    modalRef.current.querySelectorAll(
                        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                    );

                const elements = Array.from(
                    focusableElements
                ).filter((element) => !element.disabled);

                if (elements.length === 0) return;

                const first = elements[0];
                const last = elements[elements.length - 1];

                if (
                    event.shiftKey &&
                    document.activeElement === first
                ) {
                    event.preventDefault();
                    last.focus();
                } else if (
                    !event.shiftKey &&
                    document.activeElement === last
                ) {
                    event.preventDefault();
                    first.focus();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener(
                "keydown",
                handleKeyDown
            );

            document.body.style.overflow = previousOverflow;

            // Return focus to previously selected element
            if (previousFocus?.isConnected) {
                previousFocus.focus();
            }
        };
    }, [movie, onClose]);

    if (!movie) return null;

    // Movie poster URL
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;

    // Movie rating
    const rating =
        typeof movie.vote_average === "number"
            ? movie.vote_average.toFixed(1)
            : "N/A";

    // Release date
    const releaseDate = movie.release_date || "N/A";

    // Movie language
    const language =
        movie.original_language?.toUpperCase() || "N/A";

    // Movie overview
    const overview =
        movie.overview || "No description available.";

    return (
        <div
            className="modal-overlay"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                className="modal-content"
                ref={modalRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="movie-details-title"
                aria-describedby="movie-details-overview"
            >
                {/* Close Button */}
                <button
                    type="button"
                    className="close-button"
                    onClick={onClose}
                    ref={closeButtonRef}
                    aria-label="Close movie details"
                >
                    ×
                </button>

                <div className="details-container">
                    {/* Movie Poster */}
                    {posterUrl ? (
                        <img
                            src={posterUrl}
                            alt={`${movie.title} poster`}
                            className="details-poster"
                        />
                    ) : (
                        <div className="details-no-poster">
                            No poster available
                        </div>
                    )}

                    {/* Movie Information */}
                    <div className="details-info">
                        <h2 id="movie-details-title">
                            {movie.title}
                        </h2>

                        <p className="details-rating">
                            <strong>Rating:</strong>{" "}
                            ⭐ {rating} / 10
                        </p>

                        <p>
                            <strong>Release Date:</strong>{" "}
                            {releaseDate}
                        </p>

                        <p>
                            <strong>Language:</strong>{" "}
                            {language}
                        </p>

                        <h3>Overview</h3>

                        <p id="movie-details-overview">
                            {overview}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieDetails;
