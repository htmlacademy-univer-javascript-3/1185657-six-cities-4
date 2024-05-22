import 'leaflet/dist/leaflet.css';
import {Icon, Marker, layerGroup} from 'leaflet';
import { City, Offers, Offer } from '../../types/types';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const';
import {useRef, useEffect} from 'react';
import useMap from '../../hooks/use-map';

type MapComponentProps = {
  city: City;
  points: Offers;
  selectedPoint: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function MapComponent(props: MapComponentProps): JSX.Element {
  const {city, points, selectedPoint} = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      // Центрируем карту на выбранном месте, если оно задано
      if (selectedPoint) {
        map.setView([selectedPoint.coordinates.lat, selectedPoint.coordinates.lng], city.zoom);
      } else {
        map.setView([city.lat, city.lng], city.zoom);
      }

      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.coordinates.lat,
          lng: point.coordinates.lng
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, city, points, selectedPoint]); // Добавляем selectedPoint в зависимости

  return <div style={{height: '100%'}} ref={mapRef}></div>;
}

export default MapComponent;
