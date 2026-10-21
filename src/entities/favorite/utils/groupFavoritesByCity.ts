import { CityName, FavoriteOffer } from '../../../types';

export function groupFavoritesByCity(
  items: FavoriteOffer[],
): Partial<Record<CityName, FavoriteOffer[]>> {
  return items.reduce<Partial<Record<CityName, FavoriteOffer[]>>>(
    (acc, item) => {
      const city = item.city.name;
      (acc[city] ??= []).push(item);
      return acc;
    },
    {},
  );
}
