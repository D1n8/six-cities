export type MainPageType = {
  offers: Offer[];
  city: City;
  points: Points;
};

export type CityName =
  | 'Amsterdam'
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Hamburg'
  | 'Dusseldorf';

export interface User {
  name: string;
  avatar: string;
  isPro?: boolean;
}

export interface Offer {
  id: string;
  title: string;
  housingType: 'apartment' | 'room' | 'house' | 'hotel';
  price: number;
  city: City;
  location: Point;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedroomsCount: number;
  guestsMaxCount: number;
  amenities: string[];
  author: User;
  images: string[];
}

export interface Review {
  id: string;
  offerId: string;
  user: {
    name: string;
    avatar: string;
  };
  rating: number;
  date: string;
  dateLabel: string;
  text: string;
}

export type FavoriteOffer = Omit<Offer, 'isFavorite'> & { isFavorite: true };

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5;
export type RatingType = {
  value: RatingValueType;
  title: string;
};

export type City = {
  title: CityName;
  lat: number;
  lng: number;
  zoom: number;
};

export type Point = {
  title: string;
  lat: number;
  lng: number;
};

export type Points = Point[];
