import { Host } from '../types/types';

const AVATAR_URL = 'https://i.pravatar.cc/128';

const hosts: Host[] = [
  {
    name: 'Alice Anderson',
    avatarSrc: `${AVATAR_URL}?1`,
    status: 'Superhost',
    description: [
      'Experienced host with excellent ratings.',
      'Available to help guests with any questions or concerns.',
    ],
  },
  {
    name: 'Bob Baker',
    avatarSrc: `${AVATAR_URL}?2`,
    status: 'Host',
    description: [
      'Friendly and accommodating host.',
    ],
  },
  {
    name: 'Charlie Carter',
    avatarSrc: `${AVATAR_URL}?3`,
    status: 'Superhost',
    description: [
      'Highly-rated host known for exceptional hospitality.',
      'Dedicated to ensuring guests have a memorable experience.',
      'Always willing to provide local recommendations.',
    ],
  },
  {
    name: 'David Davis',
    avatarSrc: `${AVATAR_URL}?4`,
    status: 'Host',
    description: [
      'Experienced host with a warm and welcoming personality.',
      'Committed to making guests feel at home during their stay.',
    ],
  }
];

export default hosts;
