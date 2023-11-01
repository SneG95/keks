import {useEffect, useState, MutableRefObject, useRef} from 'react';
import {Map, TileLayer, LatLng} from 'leaflet';
import { DEFAULT_ZOOM } from '../consts';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  address: number[]
): Map | null {

  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: address[0],
          lng: address[1]
        },
        zoom: DEFAULT_ZOOM
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        }
      );

      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    } else {
      map?.setView(new LatLng(address[0], address[1]), DEFAULT_ZOOM);
    }
  }, [mapRef, map, address]);

  return map;
}

export default useMap;
