export type MainPageType = {
  offers: Offer[];
};

export type CityName =
  | 'Amsterdam'
  | 'Paris'
  | 'Cologne'
  | 'Brussels'
  | 'Hamburg'
  | 'Dusseldorf';

export interface Location {
  latitude: number;
  longitude: number;
  zoom: number;
}

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
  city: {
    name: CityName;
    location: Location;
  };
  location: Location;
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

export const isFavorite = (o: Offer): o is FavoriteOffer =>
  o.isFavorite === true;
