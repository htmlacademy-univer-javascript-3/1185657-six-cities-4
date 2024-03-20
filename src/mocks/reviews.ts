import { Reviews } from '../types/types';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const reviews: Reviews = [
  {
    user: {
      name: 'John Doe',
      avatarSrc: `${AVATAR_URL}?1`,
    },
    rating: 4,
    text: 'Great place! Highly recommended.',
    date: new Date('2023-02-15'),
  },
  {
    user: {
      name: 'Jane Smith',
      avatarSrc: `${AVATAR_URL}?2`,
    },
    rating: 5,
    text: 'Amazing experience! Will definitely come back.',
    date: new Date('2023-03-20'),
  },
  {
    user: {
      name: 'Alice Johnson',
      avatarSrc: `${AVATAR_URL}?3`,
    },
    rating: 3.5,
    text: 'Decent place. Could be better.',
    date: new Date('2023-04-10'),
  },
  {
    user: {
      name: 'Bob Brown',
      avatarSrc: `${AVATAR_URL}?4`,
    },
    rating: 4.5,
    text: 'Fantastic location! Enjoyed every moment of my stay.',
    date: new Date('2023-05-05'),
  },
  {
    user: {
      name: 'Emily Wilson',
      avatarSrc: `${AVATAR_URL}?5`,
    },
    rating: 4,
    text: 'Nice place, but a bit noisy during the night.',
    date: new Date('2023-06-20'),
  },
  {
    user: {
      name: 'Michael Lee',
      avatarSrc: `${AVATAR_URL}?6`,
    },
    rating: 3,
    text: 'Average experience. Expected more for the price.',
    date: new Date('2023-07-10'),
  },
  {
    user: {
      name: 'Sarah Clark',
      avatarSrc: `${AVATAR_URL}?7`,
    },
    rating: 4.5,
    text: 'Wonderful stay! Will definitely recommend to friends.',
    date: new Date('2023-08-15'),
  },
  {
    user: {
      name: 'David Martinez',
      avatarSrc: `${AVATAR_URL}?8`,
    },
    rating: 5,
    text: 'Absolutely perfect! Couldn\'t ask for more.',
    date: new Date('2023-09-30'),
  },
];

export default reviews;
