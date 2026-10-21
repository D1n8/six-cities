import { Offer } from '../../../../types';
import OfferCard from '../offer-card';

type OfferListType = {
  offers: Offer[];
};

function OfferList({ offers }: OfferListType) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard offer={offer} key={offer.id} />
      ))}
    </div>
  );
}

export default OfferList;
