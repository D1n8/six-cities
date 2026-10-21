import type { Location, Offer } from '../types';

const AMSTERDAM_LOCATION: Location = {
  latitude: 52.35514938496378,
  longitude: 4.673877537499948,
  zoom: 8,
};

const IMAGES = [
  'img/room.jpg',
  'img/apartment-01.jpg',
  'img/apartment-02.jpg',
  'img/apartment-03.jpg',
  'img/studio-01.jpg',
  'img/apartment-01.jpg',
];

const AMENITIES = [
  'Wi-Fi',
  'Washing machine',
  'Towels',
  'Heating',
  'Coffee machine',
  'Baby seat',
  'Kitchen',
  'Dishwasher',
  'Cabel TV',
  'Fridge',
];

export const mockOffers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful & luxurious studio at great location',
    housingType: 'apartment',
    price: 120,
    city: { name: 'Amsterdam', location: AMSTERDAM_LOCATION },
    location: AMSTERDAM_LOCATION,
    isFavorite: false,
    isPremium: true,
    rating: 4.8,
    description:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.\n\n' +
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    bedroomsCount: 3,
    guestsMaxCount: 4,
    amenities: AMENITIES,
    author: {
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    images: IMAGES,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    housingType: 'room',
    price: 80,
    city: { name: 'Amsterdam', location: AMSTERDAM_LOCATION },
    location: AMSTERDAM_LOCATION,
    isFavorite: true,
    isPremium: false,
    rating: 4.5,
    description:
      'A cozy room with natural wood and stone details. A great choice for travelers looking for a comfortable and affordable place to stay.\n\n' +
      'Located in the heart of the city, within walking distance to museums, cafes and public transport.',
    bedroomsCount: 1,
    guestsMaxCount: 2,
    amenities: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Towels',
      'Coffee machine',
      'Fridge',
    ],
    author: { name: 'Max', avatar: 'img/avatar-max.jpg', isPro: false },
    images: [...IMAGES].reverse(),
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    housingType: 'apartment',
    price: 132,
    city: { name: 'Amsterdam', location: AMSTERDAM_LOCATION },
    location: AMSTERDAM_LOCATION,
    isFavorite: false,
    isPremium: false,
    rating: 4.7,
    description:
      'Enjoy a lovely view of the Amsterdam canals from this stylish apartment. Discover charming streets, local cafes, and famous landmarks just around the corner.\n\n' +
      'The apartment is fully equipped with everything you need for a comfortable stay, including a fully stocked kitchen and a cozy living room.',
    bedroomsCount: 1,
    guestsMaxCount: 3,
    amenities: [
      'Wi-Fi',
      'Heating',
      'Kitchen',
      'Dishwasher',
      'Fridge',
      'Towels',
      'Washing machine',
    ],
    author: {
      name: 'Angelina',
      avatar: 'img/avatar-angelina.jpg',
      isPro: true,
    },
    images: [
      'img/apartment-02.jpg',
      'img/apartment-01.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
    ],
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    housingType: 'apartment',
    price: 180,
    city: { name: 'Amsterdam', location: AMSTERDAM_LOCATION },
    location: AMSTERDAM_LOCATION,
    isFavorite: false,
    isPremium: true,
    rating: 3.4,
    description:
      'A spacious, warm, and cozy apartment with a large comfortable bed. Perfect for a relaxing getaway in the heart of Amsterdam.\n\n' +
      'Plenty of natural light, quiet neighborhood and easy access to the main attractions of the city.',
    bedroomsCount: 2,
    guestsMaxCount: 5,
    amenities: AMENITIES.slice(0, 6),
    author: { name: 'Max', avatar: 'img/avatar-max.jpg', isPro: false },
    images: [
      'img/apartment-03.jpg',
      'img/apartment-01.jpg',
      'img/apartment-02.jpg',
      'img/room.jpg',
      'img/apartment-03.jpg',
      'img/studio-01.jpg',
    ],
  },
];
