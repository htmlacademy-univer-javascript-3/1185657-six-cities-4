import { PlaceCard } from '../types/types';

const placeCards: PlaceCard[] = [
  {
    id: 1,
    imageUrl: 'img/room.jpg',
    price: '80',
    name: 'Cozy Cottage',
    type: 'Cottage',
    rating: 4.5 * 20,
    isPremium: true,
    isBookmarked: false,
  },
  {
    id: 2,
    imageUrl: 'img/apartment-01.jpg',
    price: '120',
    name: 'Luxury Villa',
    type: 'Villa',
    rating: 5 * 20,
    isPremium: true,
    isBookmarked: true,
  },
  {
    id: 3,
    imageUrl: 'img/apartment-02.jpg',
    price: '90',
    name: 'Seaside Retreat',
    type: 'House',
    rating: 4 * 20,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 4,
    imageUrl: 'img/apartment-03.jpg',
    price: '100',
    name: 'Urban Loft',
    type: 'Apartment',
    rating: 4.2 * 20,
    isPremium: false,
    isBookmarked: true,
  },
  {
    id: 5,
    imageUrl: 'img/room.jpg',
    price: '150',
    name: 'Mountain Chalet',
    type: 'Chalet',
    rating: 4.8 * 20,
    isPremium: true,
    isBookmarked: false,
  },
  {
    id: 6,
    imageUrl: 'img/apartment-01.jpg',
    price: '70',
    name: 'Rural Farmhouse',
    type: 'Farmhouse',
    rating: 4.3 * 20,
    isPremium: false,
    isBookmarked: false,
  },
  {
    id: 7,
    imageUrl: 'img/apartment-02.jpg',
    price: '110',
    name: 'City Penthouse',
    type: 'Penthouse',
    rating: 4.7 * 20,
    isPremium: true,
    isBookmarked: false,
  },
  {
    id: 8,
    imageUrl: 'img/apartment-03.jpg',
    price: '85',
    name: 'Lakefront Cabin',
    type: 'Cabin',
    rating: 4.1 * 20,
    isPremium: false,
    isBookmarked: true,
  },
];

export default placeCards;