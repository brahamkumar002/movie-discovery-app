
# 🎬 Movie Discovery Application

A responsive Movie Discovery Application developed using **React.js, JavaScript, CSS3, and the TMDB REST API**.

The application allows users to explore popular movies, search for movies by title, and view detailed movie information including posters, ratings, release dates, descriptions, and original languages.

## 🚀 Features

- 🎥 Browse popular movies from the TMDB API
- 🔍 Search for movies by title
- 🖼️ Display movie posters and titles
- ⭐ View movie ratings out of 10
- 📅 Display movie release dates
- 📖 View detailed movie descriptions
- 🌐 Display original movie languages
- 🖱️ Click movie cards to open a details popup
- ❌ Close the popup using the close button, Escape key, or outside click
- ⏳ Loading indicators during API requests
- ⚠️ Error handling for failed API requests
- 📱 Responsive layout for desktop, tablet, and mobile
- 🧩 Reusable React functional components
- 🔄 Dynamic rendering of search results

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| React.js | Building the user interface |
| JavaScript (ES6+) | Application logic |
| CSS3 | Styling and responsive design |
| TMDB REST API | Retrieving movie information |
| Fetch API | Making HTTP requests |
| React Hooks | State management and API requests |
| Vite | Development server and production builds |
| Git & GitHub | Version control and source code hosting |

## 📂 Project Structure

```text
movie-discovery/
├── public/
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── MovieDetails.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## ⚙️ Installation and Setup

### Prerequisites

Make sure Node.js and npm are installed on your computer.

### 1. Clone the repository

```bash
git clone https://github.com/brahamkumar002/movie-discovery-app.git
```

### 2. Navigate to the project directory

```bash
cd movie-discovery-app
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure the TMDB API key

This project uses the TMDB REST API to retrieve movie information.

Create a `.env.local` file in the project root.

Add the following:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Replace `your_tmdb_api_key` with your actual TMDB API key.

Get your API key from:

https://www.themoviedb.org/settings/api

**Important:** Vite exposes variables prefixed with `VITE_` in the browser. The current implementation is suitable for learning and local development. For production, API credentials should be handled through a backend or serverless proxy.

Never commit your `.env.local` file to GitHub.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL shown in the terminal, usually:

http://localhost:5173/

### 6. Build for production

```bash
npm run build
```

### 7. Preview the production build

```bash
npm run preview
```

## 🌐 TMDB API Integration

This application uses the TMDB REST API to retrieve movie information.

### 1. Popular Movies API

Retrieves a list of popular movies.

Endpoint:

```text
https://api.themoviedb.org/3/movie/popular
```

The API returns information such as:

- Movie ID
- Movie title
- Poster path
- Average rating
- Release date
- Overview
- Original language

### 2. Search Movies API

Allows users to search for movies by title.

Endpoint:

```text
https://api.themoviedb.org/3/search/movie
```

Example request:

```text
https://api.themoviedb.org/3/search/movie?query=Avatar
```

The application includes TMDB authentication when sending requests.

### 3. Movie Poster Images

Movie posters are displayed using the TMDB image base URL:

```text
https://image.tmdb.org/t/p/w500
```

The image base URL is combined with each movie's `poster_path`.

Example:

```javascript
const posterUrl = movie.poster_path
  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  : null;
```

## 🔍 How the Application Works

1. When the application loads, React's `useEffect` Hook triggers a request to the TMDB Popular Movies API.
2. The JavaScript Fetch API retrieves movie information in JSON format.
3. React's `useState` Hook stores the returned movie data.
4. The `MovieCard` component dynamically displays movie posters, titles, ratings, and release years.
5. Users can enter a movie title into the search bar.
6. The application sends a request to the TMDB Search Movies API.
7. Matching movies are displayed dynamically without reloading the page.
8. Clicking a movie card opens the `MovieDetails` popup.
9. The popup displays the selected movie's poster, title, rating, release date, language, and overview.
10. Users can close the popup and continue exploring movies.

## 🧩 React Components

### App.jsx

The main application component is responsible for:

- Managing movie data
- Handling movie searches
- Fetching data from TMDB
- Managing loading and error states
- Handling selected movie information
- Opening and closing the details popup

### MovieCard.jsx

A reusable functional component responsible for:

- Displaying individual movie posters
- Displaying titles and ratings
- Showing release years
- Handling movie selection
- Providing a clickable View Details interface

### MovieDetails.jsx

Displays detailed information about the selected movie.

Includes:

- Movie poster
- Movie title
- TMDB rating
- Release date
- Original language
- Movie overview
- Close button
- Escape-key support
- Outside-click closing

## 🪝 React Hooks Used

### useState

Used to manage:

- Movies returned by TMDB
- Search input
- Submitted search queries
- Selected movie
- Loading state
- Error messages

### useEffect

Used to:

- Fetch popular movies when the application loads
- Fetch movie search results when the search query changes
- Cancel outdated API requests
- Handle keyboard events in the movie details popup

### useRef

Used in the movie details component to manage references to popup elements and keyboard focus.

## 📱 Responsive Design

The application uses CSS3, Flexbox, CSS Grid, and media queries.

### Desktop

- Multi-column movie poster grid
- Large search bar
- Movie cards with hover animations
- Side-by-side movie details layout

### Tablet

- Responsive movie grid
- Adjusted spacing and typography
- Flexible movie details layout

### Mobile

- Compact movie cards
- Responsive search bar
- Stacked movie details layout
- Touch-friendly buttons

## 🔮 Future Improvements

- Movie genre filtering
- Pagination and infinite scrolling
- Favorite movies and watchlist
- Movie trailer integration
- Sort movies by rating and release date
- Dark and light theme switching
- Improved movie recommendations
- Additional accessibility enhancements

## 🎯 What I Learned

Through this project, I gained practical experience in:

- Building responsive React.js applications
- Creating reusable functional components
- Integrating REST APIs using Fetch API
- Handling asynchronous JavaScript operations
- Managing state using React Hooks
- Passing data between components using props
- Rendering dynamic lists using `map()`
- Implementing movie search functionality
- Managing loading and error states
- Creating responsive layouts using CSS3
- Using Git and GitHub for version control

## 👨‍💻 Author

**Braham Kumar Sah**

GitHub: https://github.com/brahamkumar002

Project Repository:
https://github.com/brahamkumar002/movie-discovery-app

## 📄 Acknowledgment

Movie information and images are provided by [The Movie Database (TMDB)](https://www.themoviedb.org/).

This product uses the TMDB API but is not endorsed or certified by TMDB.
