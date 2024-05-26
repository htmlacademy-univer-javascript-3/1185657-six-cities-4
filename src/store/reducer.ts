// src/store/reducer.ts
import { createReducer } from '@reduxjs/toolkit';
import { setCity, setOffer, setOffers, setReviews, setNearbyOffers, fetchOffer, fetchReviews, fetchNearbyOffers, fetchOffers } from './action';
import { City, Offer, Reviews, WideOffer } from '../types/types';
import { CITIES } from '../const';

type StateType = {
  city: City;
  offers: Offer[];
  currentOffer: WideOffer | null;
  reviews: Reviews;
  nearbyOffers: Offer[];
  isLoadingOffers: boolean;
  isLoadingOffer: boolean;
  isLoadingReviews: boolean;
  isLoadingNear: boolean;
};

const initialState: StateType = {
  city: CITIES.find((city) => city.name === 'Paris') as City,
  offers: [],
  currentOffer: null,
  reviews: [],
  nearbyOffers: [],
  isLoadingOffers: true,
  isLoadingOffer: true,
  isLoadingReviews: true,
  isLoadingNear: true,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      state.isLoadingOffers = false;
    })
    .addCase(setOffer, (state, action) => {
      state.currentOffer = action.payload;
      state.isLoadingOffer = false;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
      state.isLoadingReviews = false;
    })
    .addCase(setNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
      state.isLoadingNear = false;
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isLoadingOffers = true;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.isLoadingOffer = true;
    })
    .addCase(fetchReviews.pending, (state) => {
      state.isLoadingReviews = true;
    })
    .addCase(fetchNearbyOffers.pending, (state) => {
      state.isLoadingNear = true;
    })
    .addCase(fetchOffers.fulfilled, (state) => {
      state.isLoadingOffers = false;
    })
    .addCase(fetchOffer.fulfilled, (state) => {
      state.isLoadingOffer = false;
    })
    .addCase(fetchReviews.fulfilled, (state) => {
      state.isLoadingReviews = false;
    })
    .addCase(fetchNearbyOffers.fulfilled, (state) => {
      state.isLoadingNear = false;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.isLoadingOffer = false;
    })
    .addCase(fetchOffer.rejected, (state) => {
      state.isLoadingOffer = false;
    })
    .addCase(fetchReviews.rejected, (state) => {
      state.isLoadingReviews = false;
    })
    .addCase(fetchNearbyOffers.rejected, (state) => {
      state.isLoadingNear = false;
    });
});

export { reducer };
