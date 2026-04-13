import Header from '../components/Header';
import MediaList from '../components/MediaList';
import Footer from '../components/Footer';
import { trending_movies } from '../data/trending_movies';
import { top_shows } from '../data/top_shows';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Header />
      <main>
        <MediaList title="Films Tendance" items={trending_movies} />
        <MediaList title="Séries Populaires" items={top_shows} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
