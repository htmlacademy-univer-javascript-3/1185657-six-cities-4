import { useDispatch, useSelector } from 'react-redux';
import { AppRoute } from '../../const';
import { Link, NavLink } from 'react-router-dom';
import { City, Offer, CardType } from '../../types/types';
import { setCity } from '../../store/action';
import { selectCity, selectOffers } from '../../store/selectors';
import CardListComponent from '../../components/card-list/card-list';
import MapComponent from '../../components/map/map';
import CityList from '../../components/city-list/city-list';
import SortOptions from '../../components/sort-options/sort-options';
import { CITIES } from '../../const';
import { useState, useEffect } from 'react';

function MainScreen(): JSX.Element {
  const dispatch = useDispatch();
  const city = useSelector(selectCity);
  const offers = useSelector(selectOffers);
  const [sortedOffers, setSortedOffers] = useState<Offer[]>([]);
  const [hoveredOffer, setHoveredOffer] = useState<Offer | undefined>(undefined);

  const handleCityChange = (newCity: City) => {
    dispatch(setCity(newCity));
  };

  const handleSortChange = (sortType: string) => {
    let sorted = [...offers.filter((offer) => offer.city.title === city.title)];
    switch (sortType) {
      case 'Price: low to high':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'Price: high to low':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'Top rated first':
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'Popular' or any other case, reset to original order
        sorted = [...offers.filter((offer) => offer.city.title === city.title)];
        break;
    }
    setSortedOffers(sorted);
  };

  useEffect(() => {
    setSortedOffers(offers.filter((offer) => offer.city.title === city.title));
  }, [city, offers]);

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Link className="header__logo-link header__logo-link--active" to={{ pathname: AppRoute.Main }}>
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </Link>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <NavLink className="header__nav-link header__nav-link--profile" to={{ pathname: AppRoute.Favorites}}>
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">{offers.filter((offer) => offer.isBookmarked).length}</span>
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

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CityList cities={CITIES} currentCity={city} onCityChange={handleCityChange} />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {sortedOffers.length} places to stay in {city.title}
              </b>
              <SortOptions onSortChange={handleSortChange} />
              <CardListComponent offers={sortedOffers} cardsType={CardType.City} onCardHover={setHoveredOffer} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {sortedOffers.length > 0 && (
                  <MapComponent city={city} points={sortedOffers} selectedPoint={undefined} hoveredPoint={hoveredOffer} />
                )}
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
