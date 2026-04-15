import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MediaCard from "../components/MediaCard";
import Footer from "../components/Footer";

import {
  getPopularMovies,
  searchMovies,
  getGenres,
  getMoviesByGenre
} from "../API/API";

import "./Media.css";

function Media() {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    loadMovies();
    loadGenres();
  }, []);

  const loadMovies = async () => {
    try {
      setLoading(true);
      setSelectedGenre(null);

      const data = await getPopularMovies();
      setMovies(data?.results || []);
    } catch (err) {
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  
  const loadGenres = async () => {
    const data = await getGenres();
    setGenres(data?.genres || []);
  };


  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search.trim()) {
      loadMovies();
      return;
    }

    const data = await searchMovies(search);
    setMovies(data?.results || []);
  };


  const handleGenreClick = async (genreId) => {
    setLoading(true);
    setSelectedGenre(genreId);

    const data = await getMoviesByGenre(genreId);
    setMovies(data?.results || []);

    setLoading(false);
  };

  return (
    <div className="media-page">
      <Navbar />

      <main className="media-page__main">
        <div className="media-page__inner">

          <h1 className="media-page__title">🎬 Catalogue TMDB</h1>

          <p className="media-page__subtitle">
            {movies.length} films disponibles
          </p>

          {/*  SEARCH */}
          <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
            <input
              type="text"
              placeholder="Rechercher un film..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Rechercher</button>
          </form>

          {/*  FILTRES */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <button onClick={loadMovies}>Tous</button>

            {genres.map((g) => (
              <button
                key={g.id}
                onClick={() => handleGenreClick(g.id)}
                style={{
                  background: selectedGenre === g.id ? "orange" : "#eee"
                }}
              >
                {g.name}
              </button>
            ))}
          </div>

          {/* ⏳ LOADING */}
          {loading && <p>Chargement...</p>}

          {/* 🎬 GRID */}
          <div className="media-page__grid">
            {!loading &&
              movies.map((movie) => (
                <MediaCard
                  key={movie.id}
                  title={movie.title}
                  cover={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : "https://via.placeholder.com/300x450"
                  }
                  rating={movie.vote_average}
                  type="movie"
                />
              ))}
          </div>

          {!loading && movies.length === 0 && (
            <p>Aucun film trouvé.</p>
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Media;