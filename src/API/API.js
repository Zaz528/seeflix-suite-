 const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;


export const getPopularMovies = async () => {
  const res = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=fr-FR&page=1`
  );
  return await res.json();
};


export const searchMovies = async (query) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=fr-FR&query=${query}`
  );
  return await res.json();
};


export const getGenres = async () => {
  const res = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=fr-FR`
  );
  return await res.json();
};


export const getMoviesByGenre = async (genreId) => {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&language=fr-FR`
  );
  return await res.json();
};
console.log("API KEY =", API_KEY);