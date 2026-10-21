import { useState } from 'react';
import { Offer } from '../../../../types';
import OfferCard from '../offer-card';

type OfferListType = {
  offers: Offer[];
};

function OfferList({ offers }: OfferListType) {
  const [activeOfferId, setActiveOfferId] = useState<string | null>(null);

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          setActiveOfferId={setActiveOfferId}
        />
      ))}
    </div>
  );
}

export default OfferList;
