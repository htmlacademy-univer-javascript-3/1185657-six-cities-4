import { NearbyPlace } from '../types/types';

const PLACEHOLDER_URL = 'https://via.placeholder.com/260x200';

const nearbyPlaces: NearbyPlace[] = [
  {
    imageUrl: `${PLACEHOLDER_URL}?text=Place+1`,
    price: '€80',
    name: 'Cozy Cottage',
    type: 'Cottage',
    rating: 4.5,
    isPremium: true,
    isBookmarked: false,
  },
  {
    imageUrl: `${PLACEHOLDER_URL}?text=Place+2`,
    price: '€120',
    name: 'Luxury Villa',
    type: 'Villa',
    rating: 5,
    isPremium: true,
    isBookmarked: true,
  },
  {
    imageUrl: `${PLACEHOLDER_URL}?text=Place+3`,
    price: '€90',
    name: 'Seaside Retreat',
    type: 'House',
    rating: 4,
    isPremium: false,
    isBookmarked: false,
  },
  {
    imageUrl: `${PLACEHOLDER_URL}?text=Place+4`,
    price: '€100',
    name: 'Urban Loft',
    type: 'Apartment',
    rating: 4.2,
    isPremium: false,
    isBookmarked: true,
  },
  {
    imageUrl: `${PLACEHOLDER_URL}?text=Place+5`,
    price: '€150',
    name: 'Mountain Chalet',
    type: 'Chalet',
    rating: 4.8,
    isPremium: true,
    isBookmarked: false,
  },
  {
    imageUrl: `${PLACEHOLDER_URL}?text=Place+6`,
    price: '€70',
    name: 'Rural Farmhouse',
    type: 'Farmhouse',
    rating: 4.3,
    isPremium: false,
    isBookmarked: false,
  },
  {
    imageUrl: `${PLACEHOLDER_URL}?text=Place+7`,
    price: '€110',
    name: 'City Penthouse',
    type: 'Penthouse',
    rating: 4.7,
    isPremium: true,
    isBookmarked: false,
  },
  {
    imageUrl: `${PLACEHOLDER_URL}?text=Place+8`,
    price: '€85',
    name: 'Lakefront Cabin',
    type: 'Cabin',
    rating: 4.1,
    isPremium: false,
    isBookmarked: true,
  },
];

export default nearbyPlaces;
