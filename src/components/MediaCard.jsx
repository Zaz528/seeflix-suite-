import './MediaCard.css';

function MediaCard({ title, cover, rating, type }) {
  return (
    <div className="media-card">
      <div className="media-card__cover">
        <img src={cover} alt={title} className="media-card__img" />
        <span className={`media-card__type media-card__type--${type}`}>
          {type === 'movie' ? 'Film' : 'Série'}
        </span>
        <div className="media-card__overlay">
          <span className="media-card__play">▶</span>
        </div>
      </div>
      <h3 className="media-card__title">{title}</h3>
      <div className="media-card__rating">
        <span className="media-card__star">★</span>
        <strong className="media-card__rating-value">{rating}</strong>
        <span className="media-card__rating-max">/10</span>
      </div>
    </div>
  );
}

export default MediaCard;
