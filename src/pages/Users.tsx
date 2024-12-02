import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Users as UsersIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

interface User {
  id: string;
  name: string;
  avatar?: string;
  role: "pointeur" | "tireur";
  favoriteSpot?: string;
  location?: {
    lat: number;
    lng: number;
  };
}

const mockUsers: User[] = [
  {
    id: "1",
    name: "Jean Pierre",
    role: "pointeur",
    favoriteSpot: "Boule du Canet",
    location: { lat: 43.2951, lng: 5.3860 }
  },
  {
    id: "2",
    name: "Marie Dubois",
    role: "tireur",
    favoriteSpot: "Boulodrome Municipal",
    location: { lat: 43.2707, lng: 5.3781 }
  }
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpot, setSelectedSpot] = useState("");

  const { data: users, isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: async () => mockUsers,
  });

  const handleInvite = (userId: string) => {
    toast({
      title: "Invitation envoyée",
      description: "Le joueur recevra votre invitation à jouer",
    });
  };

  const handleNearMe = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Erreur",
        description: "La géolocalisation n'est pas supportée par votre navigateur",
        variant: "destructive",
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        toast({
          title: "Localisation trouvée",
          description: "Recherche des joueurs à proximité...",
        });
      },
      (error) => {
        toast({
          title: "Erreur",
          description: "Impossible d'obtenir votre position",
          variant: "destructive",
        });
      }
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Trouver des joueurs</h1>
      
      <div className="flex gap-4 mb-8">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Rechercher un joueur..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button onClick={handleNearMe} variant="outline" className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Autour de moi
        </Button>
      </div>

      <div className="grid gap-4">
        {users?.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between">
            <Link 
              to={`/social/profile/${user.id}`}
              className="flex items-center gap-4 hover:bg-gray-50 rounded-lg transition-colors p-2"
            >
              <Avatar>
                <AvatarImage src={user.avatar} />
                <AvatarFallback>{user.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold">{user.name}</h3>
                <p className="text-sm text-gray-600">{user.role}</p>
                {user.favoriteSpot && (
                  <p className="text-sm text-gray-600 flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {user.favoriteSpot}
                  </p>
                )}
              </div>
            </Link>
            <Button onClick={() => handleInvite(user.id)}>
              Inviter à jouer
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;