import { useState, useEffect } from "react";
import SpotCard from "@/components/SpotCard";
import { useToast } from "@/components/ui/use-toast";
import { SAMPLE_SPOTS } from "@/utils/constants";

export const NearbySpots = () => {
  const { toast } = useToast();
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          toast({
            title: "Localisation activée",
            description: "Affichage des spots à proximité",
          });
        },
        (error) => {
          toast({
            title: "Erreur de géolocalisation",
            description: "Impossible d'obtenir votre position",
            variant: "destructive",
          });
        }
      );
    }
  }, [toast]);

  return (
    <div>
      <h2 className="text-2xl font-heading font-semibold mb-6">
        Spots les plus populaires à proximité
      </h2>
      <div className="grid gap-6">
        {SAMPLE_SPOTS.map((spot) => (
          <SpotCard key={spot.id} {...spot} />
        ))}
      </div>
    </div>
  );
};