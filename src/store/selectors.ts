import { RootState } from './index';

export const selectCity = (state: RootState) => state.city;
export const selectOffers = (state: RootState) => state.offers;
