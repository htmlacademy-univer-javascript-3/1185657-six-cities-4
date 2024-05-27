import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import offersReducer from './offersReducer';
import currentOfferReducer from './currentOfferReducer';
import reviewsReducer from './reviewsReducer';
import nearbyOffersReducer from './nearbyOffersReducer';
import authReducer from './authReducer';
import userDataReducer from './userDataReducer';
import favoritesReducer from './favoritesReducer';

const rootReducer = combineReducers({
  city: cityReducer,
  offers: offersReducer,
  currentOffer: currentOfferReducer,
  reviews: reviewsReducer,
  nearbyOffers: nearbyOffersReducer,
  authorizationStatus: authReducer,
  userData: userDataReducer,
  favorites: favoritesReducer,
});

export default rootReducer;
