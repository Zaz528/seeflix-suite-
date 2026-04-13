import { Link } from 'react-router-dom';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero__blob hero__blob--1"></div>
      <div className="hero__blob hero__blob--2"></div>
      <div className="hero__blob hero__blob--3"></div>

      <div className="hero__container">
        <span className="hero__badge">Nouvelle saison disponible</span>
        <h1 className="hero__title">
          Streaming is no Longer a Luxury,
          <br />
          <span className="hero__title--highlight">it's a Lifestyle</span>
        </h1>
        <p className="hero__subtitle">
          Découvrez des milliers de films et séries en streaming illimité.
          Votre divertissement, partout, à tout moment.
        </p>
        <div className="hero__actions">
          <Link to="/media" className="hero__cta hero__cta--primary">
            <span>Commencer maintenant</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
          </Link>
          <Link to="/about" className="hero__cta hero__cta--secondary">
            En savoir plus
          </Link>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-value">10K+</span>
            <span className="hero__stat-label">Titres</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-value">4K</span>
            <span className="hero__stat-label">Ultra HD</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-value">5M+</span>
            <span className="hero__stat-label">Abonnés</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
