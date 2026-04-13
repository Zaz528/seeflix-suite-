import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <Navbar />
      <main className="about-page__main">
        <div className="about-page__inner">

          <section className="about-intro">
            <h1 className="about-intro__title">
              À propos de <span className="about-intro__brand">SeeFlix</span>
            </h1>
            <p className="about-intro__text">
              SeeFlix est une plateforme de streaming imaginaire dédiée aux amoureux du cinéma et des séries télévisées.
              Fondée en 2020, notre mission est simple : rendre le meilleur du divertissement accessible à tous,
              partout et à tout moment. Avec une bibliothèque de plus de 10 000 titres soigneusement sélectionnés,
              SeeFlix offre une expérience de visionnage unique et sans compromis.
            </p>
          </section>

          <section className="about-mission">
            <div className="about-mission__icon">🎬</div>
            <div className="about-mission__content">
              <h2 className="about-mission__title">Notre Mission</h2>
              <p className="about-mission__text">
                Chez SeeFlix, nous croyons que le streaming ne devrait pas être un luxe.
                Notre objectif est de démocratiser l'accès à la culture cinématographique mondiale,
                en proposant des contenus de qualité à des prix accessibles.
                Chaque film, chaque série que nous proposons a été choisi pour enrichir votre quotidien
                et nourrir votre passion pour les histoires bien racontées.
              </p>
            </div>
          </section>

          <section className="about-values">
            <h2 className="about-values__title">Nos Valeurs</h2>
            <div className="about-values__grid">
              <div className="about-value-card">
                <div className="about-value-card__icon">🌍</div>
                <h3 className="about-value-card__title">Diversité</h3>
                <p className="about-value-card__text">
                  Nous célébrons le cinéma de toutes les cultures, de toutes les langues et de tous les genres.
                </p>
              </div>
              <div className="about-value-card">
                <div className="about-value-card__icon">✨</div>
                <h3 className="about-value-card__title">Qualité</h3>
                <p className="about-value-card__text">
                  Chaque titre est sélectionné pour sa valeur artistique et son impact culturel.
                </p>
              </div>
              <div className="about-value-card">
                <div className="about-value-card__icon">🔒</div>
                <h3 className="about-value-card__title">Accessibilité</h3>
                <p className="about-value-card__text">
                  Un accès illimité depuis n'importe quel appareil, à tout moment de la journée.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;
