import Navbar from '../components/Navbar';
import MediaCard from '../components/MediaCard';
import Footer from '../components/Footer';
import { trending_movies } from '../data/trending_movies';
import { top_shows } from '../data/top_shows';
import './Media.css';

const allMedia = [...trending_movies, ...top_shows];

function Media() {
  return (
    <div className="media-page">
      <Navbar />
      <main className="media-page__main">
        <div className="media-page__inner">
          <div className="media-page__header">
            <h1 className="media-page__title">Catalogue Complet</h1>
            <p className="media-page__subtitle">
              {allMedia.length} titres disponibles — films et séries
            </p>
          </div>

          <div className="media-page__legend">
            <span className="media-legend media-legend--movie">Film</span>
            <span className="media-legend media-legend--tvshow">Série</span>
          </div>

          <div className="media-page__grid">
            {allMedia.map((item) => (
              <MediaCard
                key={item.id}
                title={item.title}
                cover={item.cover}
                rating={item.rating}
                type={item.type}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Media;
