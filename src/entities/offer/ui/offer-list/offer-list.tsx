import { useState } from 'react';
import type { Offer } from '../../../../types';
import OfferCard from '../offer-card';

type OfferListType = {
  offers: Offer[];
  isNear?: boolean;
};

function OfferList({ offers, isNear }: OfferListType) {
  const [, setActiveOfferId] = useState<string | null>(null);

  return (
    <div
      className={`${isNear ? 'near-places__list' : 'cities__places-list'} places__list tabs__content`}
    >
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          isNear
          key={offer.id}
          setActiveOfferId={setActiveOfferId}
        />
      ))}
    </div>
  );
}

export default OfferList;
