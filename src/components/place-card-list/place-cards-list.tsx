import { useState } from 'react';
import { Offers } from '../../types/types';
import PlaceCardComponent from '../place-card/place-card';
import { ACTIVE_CARD } from '../../const';


type PlaceCardsListProps = {
  offers: Offers;
};

function PlaceCardsList({offers}: PlaceCardsListProps): JSX.Element {
  const cardsArray = Array.from({ length: offers.length }, (_, index) => index);
  const [, setActiveCard] = useState(ACTIVE_CARD);

  const handleCardMouseEnter = (id: number) => {
    setActiveCard(id);
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsArray.map((index) => (
        <PlaceCardComponent
          key={index}
          offer={offers[index]}
          onMouseEnter={() => handleCardMouseEnter(offers[index].id)}
          onMouseLeave={() => handleCardMouseEnter(0)}
        />
      ))}
    </div>
  );
}

export default PlaceCardsList;
