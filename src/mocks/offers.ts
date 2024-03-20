import { Offer } from '../types/types';
import reviews from './reviews';
import hosts from './hosts';
import placeCards from './placeCards';

const offers: Offer[] = [
  {
    header: {
      userEmail: 'user@example.com',
      favoriteCount: 3,
    },
    main: {
      offerGallery: ['img/room.jpg', 'img/apartment-01.jpg', 'img/apartment-02.jpg'],
      offerDetails: {
        name: 'Beautiful & luxurious studio at great location',
        isPremium: true,
        rating: 4.8,
        type: 'Apartment',
        bedrooms: 1,
        maxGuests: 2,
        price: '&euro;120',
        insideItems: ['Wi-Fi', 'Heating', 'Kitchen'],
      },
      host: hosts[0],
      reviews: reviews.slice(0, 3),
      nearPlaces: placeCards.slice(0, 3),
    },
  },
  {
    header: {
      userEmail: 'user@example.com',
      favoriteCount: 5,
    },
    main: {
      offerGallery: ['img/apartment-03.jpg', 'img/studio-01.jpg', 'img/apartment-01.jpg'],
      offerDetails: {
        name: 'Modern & cozy apartment in city center',
        isPremium: false,
        rating: 4.5,
        type: 'Apartment',
        bedrooms: 2,
        maxGuests: 4,
        price: '&euro;150',
        insideItems: ['Wi-Fi', 'Heating', 'Kitchen', 'Washing machine'],
      },
      host: hosts[1],
      reviews: reviews.slice(3, 6),
      nearPlaces: placeCards.slice(3, 6),
    },
  },
  {
    header: {
      userEmail: 'user@example.com',
      favoriteCount: 8,
    },
    main: {
      offerGallery: ['img/studio-02.jpg', 'img/apartment-04.jpg', 'img/room-02.jpg'],
      offerDetails: {
        name: 'Charming studio with garden view',
        isPremium: true,
        rating: 4.9,
        type: 'Studio',
        bedrooms: 0,
        maxGuests: 2,
        price: '&euro;100',
        insideItems: ['Wi-Fi', 'Heating', 'Coffee machine'],
      },
      host: hosts[2],
      reviews: reviews.slice(6, 8),
      nearPlaces: placeCards.slice(6, 8),
    },
  },
  {
    header: {
      userEmail: 'user@example.com',
      favoriteCount: 10,
    },
    main: {
      offerGallery: ['img/apartment-05.jpg', 'img/apartment-06.jpg', 'img/room-03.jpg'],
      offerDetails: {
        name: 'Spacious apartment with stunning city views',
        isPremium: false,
        rating: 4.7,
        type: 'Apartment',
        bedrooms: 3,
        maxGuests: 6,
        price: '&euro;200',
        insideItems: ['Wi-Fi', 'Heating', 'Kitchen', 'Balcony'],
      },
      host: hosts[3],
      reviews: reviews.slice(0, 4),
      nearPlaces: placeCards.slice(0, 4),
    },
  },
];

export default offers;
