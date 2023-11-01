import { URL_SHOP_MARKER, URL_PRODUCTION_MARKER } from '../../consts';
import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import { TShop } from '../../types/shop';
import { SHOPS } from '../../consts';

const shopIcon = new Icon({
  iconUrl: URL_SHOP_MARKER,
  iconSize: [26, 24],
  iconAnchor: [26, 24],
});

const productionIcon = new Icon({
  iconUrl: URL_PRODUCTION_MARKER,
  iconSize: [26, 24],
  iconAnchor: [26, 24],
});

type MapProps = {
  currentAddress: TShop;
}

function Map({currentAddress}: MapProps): JSX.Element {
  const {name, address} = currentAddress;
  const mapRef = useRef(null);
  const map = useMap(mapRef, address);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      const marker = new Marker({
        lat: address[0],
        lng: address[1],
      });

      marker
        .setIcon(name === SHOPS[2].name ?
          productionIcon :
          shopIcon)
        .addTo(markerLayer);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, address, name]);


  return(
    <div
      className="map__wrapper"
      style={{
        height: '100%',
        minHeight: '500px',
        width: '100%',
        maxWidth: '1144px',
      }}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
