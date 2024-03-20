import { AppRoute } from '../../const';
import { Offers } from '../../types/types';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { monthMap } from '../../const';
import NearPlaceList from '../../components/near-place-list/near-place-list';
import ReviewForm from '../../components/review-form/review-form';

type OfferScreenProps = {
  offers: Offers;
};


function OfferScreen({offers}: OfferScreenProps): JSX.Element {
  const { id } = useParams();
  const navigate = useNavigate();

  if (isNaN(Number(id))) {
    navigate('/404');
  }

  const numericId = Number(id);

  const selectedOffer = offers.find((offer) => offer.id === numericId);

  if (!selectedOffer) {
    navigate('/404');
  }

  if (!selectedOffer) {
    return <div>Error: Offer not found</div>;
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
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{offers.filter((offer) => offer.isBookmarked).length}</span>
                  </a>
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
              {selectedOffer.offerGallery.map((item) => (
                <div key={item} className="offer__image-wrapper">
                  <img className="offer__image" src={item} alt="Photo studio"/>
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {selectedOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {selectedOffer.name}
                </h1>
                <button className={`offer__bookmark-button button ${selectedOffer.isBookmarked ? 'offer__bookmark-button--active' : ''}`} type="button">
                  <svg className="offer__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${selectedOffer.rating * 20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{selectedOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {selectedOffer.type}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {selectedOffer.bedrooms} Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {selectedOffer.maxGuests} adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{selectedOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {selectedOffer.insideItems.map((item) => (
                    <li key={item} className="offer__inside-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${selectedOffer.host.status === 'Pro' ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={selectedOffer.host.avatarSrc} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="offer__user-name">
                    {selectedOffer.host.name}
                  </span>
                  <span className="offer__user-status">
                    {selectedOffer.host.status}
                  </span>
                </div>
                <div className="offer__description">
                  {selectedOffer.host.description.map((item) => (
                    <p key={item} className="offer__text">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{selectedOffer.reviews.length}</span></h2>
                <ul className="reviews__list">
                  {selectedOffer.reviews.map((item) => (
                    <li key={item.id} className="reviews__item">
                      <div className="reviews__user user">
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src={item.user.avatarSrc} width="54" height="54" alt="Reviews avatar"/>
                        </div>
                        <span className="reviews__user-name">
                          {item.user.name}
                        </span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{width: `${item.rating * 20}%`}}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">
                          {item.text}
                        </p>
                        <time className="reviews__time" dateTime={item.date.toISOString().slice(0, 10)}>{`${monthMap[Number(item.date.toISOString().slice(6, 7))]} ${item.date.toISOString().slice(0, 4)}`}</time>
                      </div>
                    </li>
                  ))}
                </ul>
                <ReviewForm />
              </section>
            </div>
          </div>
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <NearPlaceList offers={selectedOffer.nearPlaces} />
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
