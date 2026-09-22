import PlaceCard from '../PlaceCard';

type PlacesListType = {
  placesCount: number;
};

function PlacesList({ placesCount }: PlacesListType) {
  const placeIds = Array.from(
    { length: placesCount },
    (_, index) => `place_${index}`
  );

  return (
    <div className="cities__places-list places__list tabs__content">
      {placeIds.map((id) => (
        <PlaceCard key={id} />
      ))}
    </div>
  );
}

export default PlacesList;
