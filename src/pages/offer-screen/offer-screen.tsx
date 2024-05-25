import { AppRoute } from '../../const';
import { CardType, Offer } from '../../types/types';
import { useParams, Link, NavLink, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectOffers, selectCurrentOffer, selectReviews, selectNearbyOffers, selectLoadingStatus } from '../../store/selectors';
import CardListComponent from '../../components/card-list/card-list';
import ReviewFormComponent from '../../components/review-form/review-form';
import ReviewListComponent from '../../components/review-list/review-list';
import MapComponent from '../../components/map/map';
import { useState, useEffect } from 'react';
import { fetchOffer, fetchReviews, fetchNearbyOffers } from '../../store/action';
import { AppDispatch } from '../../store/index';

function OfferScreen(): JSX.Element {
  const dispatch: AppDispatch = useDispatch();

  const offerId = useParams().id ?? '';

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOffer(offerId));
      dispatch(fetchReviews(offerId));
      dispatch(fetchNearbyOffers(offerId));
    }
  }, [dispatch, offerId]);

  const currentOffer = useSelector(selectCurrentOffer);
  const reviews = useSelector(selectReviews);
  const nearPlaces = useSelector(selectNearbyOffers);
  const cntFav = useSelector(selectOffers).filter((offer) => offer.isFavorite).length;
  const isLoading = useSelector(selectLoadingStatus);

  const [hoveredOffer, setHoveredOffer] = useState<Offer | undefined>(undefined);


  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!currentOffer) {
    return <Navigate to={AppRoute.Error} />;
  }


  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link" to={{ pathname: AppRoute.Main }}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <NavLink className="header__nav-link header__nav-link--profile" to={{ pathname: AppRoute.Favorites}}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{cntFav}</span>
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {currentOffer.images.map((item) => (
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={item} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {currentOffer.title}
                </h1>
                <button className={`offer__bookmark-button button ${currentOffer.isFavorite ? 'offer__bookmark-button--active' : ''}`} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${currentOffer.rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {currentOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {currentOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                Max {currentOffer.maxAdults} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {currentOffer.goods.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${currentOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={currentOffer.host.avatarUrl} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {currentOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {currentOffer.host.isPro && 'Pro'}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {currentOffer.description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewListComponent reviews={reviews} />
                <ReviewFormComponent />
              </section>
            </div>
          </div>
          <section className="offer__map map">
            <MapComponent city={currentOffer.city} points={nearPlaces} selectedPoint={currentOffer} hoveredPoint={hoveredOffer} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <CardListComponent offers={nearPlaces} cardsType={CardType.Near} onCardHover={setHoveredOffer} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
