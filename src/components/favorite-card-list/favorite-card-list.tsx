import { useState } from 'react';
import { Offers } from '../../types/types';
import { ACTIVE_CARD } from '../../const';
import FavoriteCard from '../favorite-card/favorite-card';


type FavoriteCardListProps = {
  offers: Offers;
  city: string;
};

function FavoriteCardList({offers, city}: FavoriteCardListProps): JSX.Element {
  const cardsArray = Array.from({ length: offers.length }, (_, index) => index);
  const [, setActiveCard] = useState(ACTIVE_CARD);

  const handleCardMouseEnter = (id: number) => {
    setActiveCard(id);
  };
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {cardsArray.map((index) => (
          <FavoriteCard
            key={index}
            offer={offers[index]}
            onMouseEnter={() => handleCardMouseEnter(offers[index].id)}
            onMouseLeave={() => handleCardMouseEnter(0)}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoriteCardList;
