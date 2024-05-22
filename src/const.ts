import { City } from './types/types';

export const enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Error = '/error'
}

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export const monthMap: { [key: number]: string } = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December'
};

export const ACTIVE_CARD = 0;

export const REVIEW_FORM = {
  rating: 0,
  review: '',
};

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';

export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const CITIES: City[] = [
  { title: 'Paris', lat: 48.8566, lng: 2.3522, zoom: 12 },
  { title: 'Cologne', lat: 50.9375, lng: 6.9603, zoom: 12 },
  { title: 'Brussels', lat: 50.8503, lng: 4.3517, zoom: 12 },
  { title: 'Amsterdam', lat: 52.3676, lng: 4.9041, zoom: 12 },
  { title: 'Hamburg', lat: 53.5511, lng: 9.9937, zoom: 12 },
  { title: 'Dusseldorf', lat: 51.2277, lng: 6.7735, zoom: 12 },
];
