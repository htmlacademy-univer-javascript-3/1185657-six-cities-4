import { useState } from 'react';
import { PlaceCards } from '../../types/types';
import PlaceCardComponent from '../place-card/place-card';
import { ACTIVE_CARD } from '../../const';


type PlaceCardsListProps = {
  placeCards: PlaceCards;
};

function PlaceCardsList({placeCards}: PlaceCardsListProps): JSX.Element {
  const cardsArray = Array.from({ length: placeCards.length }, (_, index) => index);
  const [, setActiveCard] = useState(ACTIVE_CARD);

  const handleCardMouseEnter = (id: number) => {
    setActiveCard(id);
  };
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsArray.map((index) => (
        <PlaceCardComponent
          key={index}
          placeCard={placeCards[index]}
          onMouseEnter={() => handleCardMouseEnter(placeCards[index].id)}
          onMouseLeave={() => handleCardMouseEnter(0)}
        />
      ))}
    </div>
  );
}

export default PlaceCardsList;
