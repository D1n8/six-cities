import type { CityName, FavoriteOffer } from '../../../../types';
import FavoriteCard from '../favorite-card';

type FavoriteListPropType = {
  grouped: Partial<Record<CityName, FavoriteOffer[]>>;
  cities: CityName[];
};

function FavoriteList({ grouped, cities }: FavoriteListPropType) {
  return (
    <ul className="favorites__list">
      {cities.map((cityName) => (
        <li key={cityName} className="favorites__locations-items">
          <div className="favorites__locations locations locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="#">
                <span>{cityName}</span>
              </a>
            </div>
          </div>
          <div className="favorites__places">
            {grouped[cityName]?.map((offer) => (
              <FavoriteCard key={offer.id} offer={offer} />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default FavoriteList;
