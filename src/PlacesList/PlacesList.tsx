import PlaceCard from '../PlaceCard';

type PlacesListType = {
  placesCount: number;
};

function PlacesList({ placesCount }: PlacesListType) {
  return (
    <div className="cities__places-list places__list tabs__content">
      {Array.from({ length: placesCount }).map((_, index) => (
        <PlaceCard key={index} />
      ))}
    </div>
  );
}

export default PlacesList;
