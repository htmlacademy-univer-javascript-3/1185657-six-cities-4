import { Reviews, WideOffer, Offers } from '../types/types';
import { RootState } from './index';

export const selectCity = (state: RootState) => state.city;
export const selectOffers = (state: RootState) => state.offers;
export const selectCurrentOffer = (state: RootState): WideOffer | null => state.currentOffer;
export const selectReviews = (state: RootState): Reviews => state.reviews;
export const selectNearbyOffers = (state: RootState): Offers => state.nearbyOffers;
export const selectLoadingStatus = (state: RootState): boolean => state.isLoading;
