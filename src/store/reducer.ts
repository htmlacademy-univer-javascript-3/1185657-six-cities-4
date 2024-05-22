// src/store/reducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffers } from './action';
import { City } from '../types/types';
import offers from '../mocks/offers';
import { CITIES } from '../const';

const initialState = {
  city: CITIES.find((city) => city.title === 'Paris') as City,
  offers: offers
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});

export { reducer };
