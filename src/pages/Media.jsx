import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import MediaCard from "../components/MediaCard";
import Footer from "../components/Footer";
import { getPopularMovies, searchMovies } from "../API/API";
import "./Media.css";

function Media() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    loadPopularMovies();
  }, []);

  const loadPopularMovies = async () => {
    try {
      setLoading(true);
      const data = await getPopularMovies();

      console.log("POPULAR:", data); 

      setMovies(data?.results || []);
    } catch (error) {
      console.error("Erreur chargement films:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

 
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search.trim()) {
      loadPopularMovies();
      return;
    }

    try {
      setLoading(true);
      const data = await searchMovies(search);

      console.log("SEARCH:", data); 

      setMovies(data?.results || []);
    } catch (error) {
      console.error("Erreur recherche:", error);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="media-page">
      <Navbar />

      <main className="media-page__main">
        <div className="media-page__inner">

          {/* HEADER */}
          <div className="media-page__header">
            <h1 className="media-page__title">Catalogue TMDB</h1>

            <p className="media-page__subtitle">
              {movies.length} films disponibles
            </p>
          </div>

          {/* SEARCH */}
          <form onSubmit={handleSearch} className="media-search">
            <input
              type="text"
              placeholder="Rechercher un film..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">Rechercher</button>
          </form>

          {/* LOADING */}
          {loading && <p>Chargement...</p>}

          {/* GRID */}
          <div className="media-page__grid">
            {!loading &&
              movies.map((movie) => (
                <MediaCard
                  key={movie.id}
                  title={movie.title}
                  cover={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : "https://via.placeholder.com/300x450?text=No+Image"
                  }
                  rating={movie.vote_average}
                  type="movie"
                />
              ))}
          </div>

          {/* EMPTY STATE */}
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