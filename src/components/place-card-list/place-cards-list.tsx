import { PlaceCards } from '../../types/types';
import PlaceCardComponent from '../place-card/place-card';


type PlaceCardsListProps = {
  placeCards: PlaceCards;
};

function PlaceCardsList({placeCards}: PlaceCardsListProps): JSX.Element {
  const cardsArray = Array.from({ length: placeCards.length }, (_, index) => index);
  return (
    <div className="cities__places-list places__list tabs__content">
      {cardsArray.map((index) => (
        <PlaceCardComponent key={index} placeCard={placeCards[index]} />
      ))}
    </div>
  );
}

export default PlaceCardsList;
