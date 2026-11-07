import { useRef, useEffect } from 'react';
import { Marker, layerGroup } from 'leaflet';
import useMap from '../hooks/use-map';
import { City, Points } from '../../../types';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Points;
};

function Map(props: MapProps): JSX.Element {
  const { city, points } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng,
        });

        marker.addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points]);

  return <div style={{ height: '100%', width: '100%' }} ref={mapRef}></div>;
}

export default Map;
