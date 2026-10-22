import type { Review } from '../types';

export const mockReviews: Review[] = [
  {
    id: 'r1',
    offerId: '1',
    user: { name: 'Max', avatar: 'img/avatar-max.jpg' },
    rating: 4,
    date: '2019-04-24',
    dateLabel: 'April 2019',
    text: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    id: 'r2',
    offerId: '1',
    user: { name: 'Angelina', avatar: 'img/avatar-angelina.jpg' },
    rating: 5,
    date: '2019-05-12',
    dateLabel: 'May 2019',
    text: 'Amazing stay! The studio is exactly as described, very clean and stylish. The location is perfect — everything is within walking distance.',
  },
  {
    id: 'r3',
    offerId: '2',
    user: { name: 'Angelina', avatar: 'img/avatar-angelina.jpg' },
    rating: 5,
    date: '2019-03-08',
    dateLabel: 'March 2019',
    text: 'Wood and stone details make this place really special. Cozy, warm, and the host is very welcoming. Will definitely come back.',
  },
  {
    id: 'r4',
    offerId: '3',
    user: { name: 'Max', avatar: 'img/avatar-max.jpg' },
    rating: 4,
    date: '2019-06-01',
    dateLabel: 'June 2019',
    text: 'The canal view is stunning, especially in the evening. The apartment is clean and well-equipped. A bit noisy at night, but overall great value.',
  },
  {
    id: 'r5',
    offerId: '4',
    user: { name: 'Angelina', avatar: 'img/avatar-angelina.jpg' },
    rating: 3,
    date: '2019-02-14',
    dateLabel: 'February 2019',
    text: 'Big comfortable bed and plenty of space, but the apartment could use some updating. Good for a short stay.',
  },
];
