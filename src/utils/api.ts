import { Boulodrome } from '../types';

const SAMPLE_SPOTS: Boulodrome[] = [
  {
    id: "1",
    name: "Temps Nouveaux",
    address: "Rue des Temps Nouveaux",
    city: "Saint-Étienne",
    position: { lat: 45.4381161, lng: 4.4086265 },
    terrainCount: 4,
    surfaceType: "Stabilisé",
    images: [
      "/lovable-uploads/15d4f3bf-03b8-4921-9b40-b36ef7619b45.png",
      "/lovable-uploads/a54826ce-10f2-4b01-8875-6a66ff866e39.png"
    ],
    rating: 4.0,
    description: "Boulodrome situé dans le quartier des Temps Nouveaux à Saint-Étienne, offrant un cadre agréable pour la pratique de la pétanque.",
    comments: []
  },
  {
    id: "2",
    name: "Boule du Canet",
    address: "12 Bd Charles Moretti, 13014 Marseille",
    city: "Marseille",
    position: { lat: 43.2951, lng: 5.3860 },
    terrainCount: 8,
    surfaceType: "Gravier stabilisé",
    images: [
      "/lovable-uploads/f30f645a-90e5-4f3c-9552-66727deabea9.png",
      "/lovable-uploads/8ccc7d26-60a6-4c3f-96d1-47458d9e389c.png"
    ],
    rating: 4.5,
    comments: []
  },
  {
    id: "3",
    name: "Boulodrome Municipal",
    address: "Avenue des Pins, 13008 Marseille",
    city: "Marseille",
    position: { lat: 43.2707, lng: 5.3781 },
    terrainCount: 12,
    surfaceType: "Terre battue",
    images: [
      "/lovable-uploads/c2be50ed-5173-4ef3-a1dd-e55b2ff272ec.png",
      "/lovable-uploads/b9ed2b52-424f-4fc7-a6aa-613c43302434.png"
    ],
    rating: 4.2,
    comments: []
  }
];

export const fetchSpotDetail = async (id: string): Promise<Boulodrome> => {
  const spot = SAMPLE_SPOTS.find(s => s.id === id);
  if (!spot) throw new Error('Spot not found');
  return spot;
};

export const fetchPetanqueSpots = async (): Promise<Boulodrome[]> => {
  return SAMPLE_SPOTS;
};