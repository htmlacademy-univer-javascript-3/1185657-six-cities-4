import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import { PlaceCard } from '../../types/types';


type PlaceCardProps = {
  placeCard: PlaceCard;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

function PlaceCardComponent({placeCard, onMouseEnter, onMouseLeave}: PlaceCardProps): JSX.Element {
  return (
    <article className="cities__card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {placeCard.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={{ pathname: `offer/${placeCard.id}` }}>
          <img className="place-card__image" src={placeCard.imageUrl} width="260" height="200" alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{placeCard.price}&nbsp;</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button button ${placeCard.isBookmarked ? 'place-card__bookmark-button--active' : ''}`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${placeCard.rating}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{ pathname: `${AppRoute.Offer}/${placeCard.id}` }}>{placeCard.name}</Link>
        </h2>
        <p className="place-card__type">{placeCard.type}</p>
      </div>
    </article>
  );
}

export default PlaceCardComponent;
