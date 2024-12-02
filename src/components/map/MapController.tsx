import { useMap } from 'react-leaflet';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export const MapController = () => {
  const map = useMap();
  const [searchParams] = useSearchParams();
  
  useEffect(() => {
    const lat = searchParams.get('lat');
    const lng = searchParams.get('lng');
    
    if (lat && lng) {
      map.setView([parseFloat(lat), parseFloat(lng)], 13);
    }
  }, [map, searchParams]);

  return null;
};