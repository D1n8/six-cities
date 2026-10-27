import type { FavoriteOffer, Offer } from '../../../types';

export const isFavorite = (o: Offer): o is FavoriteOffer =>
  o.isFavorite === true;
