import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api";
import { useState } from "react";

const PETANQUE_SPOTS = [
  { id: 1, position: { lat: 48.8566, lng: 2.3522 }, name: "Place de la Concorde" },
  { id: 2, position: { lat: 48.8462, lng: 2.3371 }, name: "Jardin du Luxembourg" },
  { id: 3, position: { lat: 48.8566, lng: 2.3618 }, name: "Place des Vosges" },
];

const Map = () => {
  const [selectedSpot, setSelectedSpot] = useState<number | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || "",
  });

  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <div className="map-container h-[400px] w-full">
      <GoogleMap
        zoom={13}
        center={{ lat: 48.8566, lng: 2.3522 }}
        mapContainerClassName="w-full h-full rounded-lg"
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          fullscreenControl: false,
          styles: [
            {
              featureType: "poi.business",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "transit",
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {PETANQUE_SPOTS.map((spot) => (
          <MarkerF
            key={spot.id}
            position={spot.position}
            onClick={() => setSelectedSpot(spot.id)}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
              scaledSize: new window.google.maps.Size(32, 32),
            }}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;