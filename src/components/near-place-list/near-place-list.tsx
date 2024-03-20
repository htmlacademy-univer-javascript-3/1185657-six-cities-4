import { useState } from 'react';
import { Offers } from '../../types/types';
import { ACTIVE_CARD } from '../../const';
import NearPlace from '../near-place/near-place';


type NearPlaceListProps = {
  offers: Offers;
};

function NearPlaceList({offers}: NearPlaceListProps): JSX.Element {
  const cardsArray = Array.from({ length: offers.length }, (_, index) => index);
  const [, setActiveCard] = useState(ACTIVE_CARD);

  const handleCardMouseEnter = (id: number) => {
    setActiveCard(id);
  };
  return (
    <div className="near-places__list places__list">
      {cardsArray.map((index) => (
        <NearPlace
          key={index}
          offer={offers[index]}
          onMouseEnter={() => handleCardMouseEnter(offers[index].id)}
          onMouseLeave={() => handleCardMouseEnter(0)}
        />
      ))}
    </div>
  );
}

export default NearPlaceList;
