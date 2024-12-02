import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import { MapController } from './components/map/MapController';
import { useQuery } from '@tanstack/react-query';
import { fetchPetanqueSpots } from './utils/api';
import { useToast } from './components/ui/use-toast';

interface MapProps {
  initialCenter: [number, number];
  initialZoom: number;
}

const Map = ({ initialCenter, initialZoom }: MapProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: spots, isError } = useQuery({
    queryKey: ['petanque-spots'],
    queryFn: fetchPetanqueSpots,
  });

  if (isError) {
    toast({
      title: "Erreur",
      description: "Impossible de charger les boulodromes",
      variant: "destructive",
    });
  }

  const customIcon = new L.Icon({
    iconUrl: '/lovable-uploads/f77fd89e-154b-46e4-b1a6-dae20c68ab2e.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <MapContainer 
      className="w-full h-[calc(100vh-200px)] rounded-lg shadow-lg"
      center={initialCenter as L.LatLngExpression}
      zoom={initialZoom}
      scrollWheelZoom={true}
    >
      <TileLayer
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <MapController />
      {spots?.map((spot) => (
        <Marker 
          key={spot.id}
          position={[spot.position.lat, spot.position.lng] as L.LatLngExpression}
          eventHandlers={{
            click: () => {
              navigate(`/spots/${spot.id}`);
            },
          }}
          icon={customIcon as L.Icon}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{spot.name}</h3>
              <p className="text-sm">{spot.address}</p>
              <button 
                onClick={() => navigate(`/spots/${spot.id}`)}
                className="mt-2 text-sm text-primary hover:underline"
              >
                Voir les détails
              </button>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;