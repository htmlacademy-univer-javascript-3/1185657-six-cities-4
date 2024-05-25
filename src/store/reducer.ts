// src/store/reducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffer, setOffers, setReviews, setNearbyOffers, fetchOffer, fetchReviews, fetchNearbyOffers } from './action';
import { City, Offer, Reviews, WideOffer } from '../types/types';
import { CITIES } from '../const';

type StateType = {
  city: City;
  offers: Offer[];
  currentOffer: WideOffer | null;
  reviews: Reviews;
  nearbyOffers: Offer[];
  isLoading: boolean;
};

const initialState: StateType = {
  city: CITIES.find((city) => city.name === 'Paris') as City,
  offers: [],
  currentOffer: null,
  reviews: [],
  nearbyOffers: [],
  isLoading: false,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
      state.isLoading = false;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    })
    .addCase(setOffer, (state, action) => {
      state.currentOffer = action.payload;
      state.isLoading = false;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
      state.isLoading = false;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
      state.isLoading = false;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchReviews.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchNearbyOffers.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(fetchOffer.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(fetchReviews.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(fetchNearbyOffers.fulfilled, (state) => {
      state.isLoading = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(fetchReviews.rejected, (state) => {
      state.isLoading = false;
    })
    .addCase(fetchNearbyOffers.rejected, (state) => {
      state.isLoading = false;
    });
});

export { reducer };
