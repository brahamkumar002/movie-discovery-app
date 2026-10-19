
# 🎬 Movie Discovery Application

A responsive Movie Discovery Application built using React.js,
JavaScript, and CSS3. The application integrates the TMDB REST API
to display popular movies, search for movies, and view detailed
movie information.

## 🚀 Features

- Browse popular movies fetched from the TMDB API
- Search for movies by title
- View movie posters, ratings, and release dates
- Click on a movie to view its detailed information
- View movie descriptions and original language
- Responsive design for desktop, tablet, and mobile
- Loading and error handling for API requests
- Reusable React functional components
- State management using React Hooks

## 🛠️ Technologies Used

- React.js - Building the user interface
- JavaScript (ES6+) - Application logic
- CSS3 - Styling and responsive design
- TMDB REST API - Fetching movie information
- Fetch API - Making HTTP requests
- React Hooks - useState and useEffect
- Vite - Development and build tool
- Git & GitHub - Version control

## 📂 Project Structure

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
├── package.json
└── README.md

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/movie-discovery-app.git
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

Create a `.env.local` file in the project root.

Add the following:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
```

Get your API key from:
https://www.themoviedb.org/settings/api

Note: Vite exposes VITE_ variables in the browser. For
production use, API credentials should be protected with
a server-side proxy.

### 5. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## 🔍 How It Works

1. When the application loads, useEffect triggers a request
   to the TMDB Popular Movies API.
2. The Fetch API retrieves movie information in JSON format.
3. useState stores the fetched movie data.
4. MovieCard components dynamically render movie posters,
   titles, ratings, and release years.
5. Users can search for movies using the search bar.
6. Search requests retrieve matching results from TMDB.
7. Clicking a movie opens a details popup containing its
   poster, rating, release date, language, and overview.

## 🧩 React Components

### App.jsx
Main application component responsible for:
- Managing application state
- Fetching movie information
- Handling movie searches
- Opening and closing the details popup

### MovieCard.jsx
Reusable component responsible for:
- Displaying movie posters
- Displaying ratings and release years
- Handling movie selection

### MovieDetails.jsx
Component responsible for:
- Showing detailed movie information
- Displaying the selected movie's overview
- Closing the popup using the close button,
  Escape key, or outside click

## 📱 Responsive Design

The application uses CSS Grid, Flexbox, and media queries
to support different screen sizes.

- Desktop: Multi-column movie grid
- Tablet: Responsive movie grid
- Mobile: Compact layout with adjusted movie cards

## 📸 Screenshots

Add screenshots of the application here.

Suggested screenshots:
- Homepage displaying popular movies
- Movie search results
- Movie details popup
- Mobile responsive layout

## 🔮 Future Improvements

- Movie genre filtering
- Pagination and infinite scrolling
- Favorite movies feature
- Movie trailers
- Sorting movies by rating and release date
- Enhanced accessibility

## 👨‍💻 Author

Your Name

GitHub: https://github.com/YOUR_USERNAME

## 📄 Acknowledgment

This project uses the TMDB API for movie information
and images.

This product uses the TMDB API but is not endorsed or
certified by TMDB.

