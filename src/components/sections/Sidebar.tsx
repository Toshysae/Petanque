import { Button } from "@/components/ui/button";
import { Calendar, Users, CalendarPlus, MapPin, UserSearch } from "lucide-react";
import { UPCOMING_EVENTS } from "@/utils/constants";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import DynamicAdBanner from "./ads/DynamicAdBanner";
import { PopularPosts } from "./PopularPosts";

export const Sidebar = () => {
  const { toast } = useToast();

  const handleFindNearbyFriends = () => {
    toast({
      title: "Recherche d'amis",
      description: "Recherche des amis à proximité en cours...",
    });
  };

  return (
    <div className="space-y-8 lg:max-w-sm xl:max-w-md">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Joueurs à proximité
          </h3>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
              onClick={handleFindNearbyFriends}
            >
              <UserSearch className="w-4 h-4" />
              Amis
            </Button>
            <Button 
              variant="outline" 
              size="sm"
            >
              Tous
            </Button>
          </div>
        </div>
        <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin">
          {[
            { id: 1, name: "Jean Pierre", distance: "500m", avatar: "/lovable-uploads/73dfd78b-7ab0-435d-a988-9332b768757b.png" },
            { id: 2, name: "Marie Dubois", distance: "1km", avatar: "/lovable-uploads/8287843f-d016-423e-b546-a0d4185d38ab.png" },
            { id: 3, name: "Paul Martin", distance: "2km", avatar: "/lovable-uploads/c2be50ed-5173-4ef3-a1dd-e55b2ff272ec.png" },
            { id: 4, name: "Sophie Laurent", distance: "2.5km", avatar: "/lovable-uploads/24af02d3-ce35-46f2-b7bd-5ba92ddd85f8.png" },
            { id: 5, name: "Michel Blanc", distance: "3km", avatar: "/lovable-uploads/427c5e6e-7c0b-45c9-a650-9bf9cc4eadf1.png" },
            { id: 6, name: "Claire Dubois", distance: "3.5km", avatar: "/lovable-uploads/43097154-e587-454a-a974-35774db9079d.png" },
            { id: 7, name: "Thomas Petit", distance: "4km", avatar: "/lovable-uploads/4dfb1f7a-0930-4931-b208-1da463405ebc.png" },
            { id: 8, name: "Julie Martin", distance: "4.5km", avatar: "/lovable-uploads/5ec97d0e-c241-44f3-bd9d-42810a356200.png" },
            { id: 9, name: "Antoine Durand", distance: "5km", avatar: "/lovable-uploads/80a127b6-19d3-447e-8844-a0dc541c3dd9.png" },
            { id: 10, name: "Emma Bernard", distance: "5.5km", avatar: "/lovable-uploads/8ccc7d26-60a6-4c3f-96d1-47458d9e389c.png" },
          ].map((player) => (
            <Link 
              to={`/social/profile/${player.id}`} 
              key={player.id} 
              className="flex items-center justify-between border-b pb-2 last:border-0 hover:bg-gray-50 transition-colors rounded-lg p-2"
            >
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={player.avatar} alt={player.name} />
                  <AvatarFallback>{player.name[0]}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{player.name}</span>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <MapPin className="w-3 h-3 mr-1" />
                {player.distance}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <a 
        href="https://www.obut.com/fr/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block hover:opacity-95 transition-opacity"
      >
        <img
          src="/lovable-uploads/24af02d3-ce35-46f2-b7bd-5ba92ddd85f8.png"
          alt="Obut - Créer des souvenirs inoubliables avec la pétanque"
          className="w-full rounded-xl shadow-md"
        />
      </a>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Événements à venir
        </h3>
        <div className="space-y-6">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.id} className="border-b pb-4 last:border-0">
              <h4 className="font-medium text-lg">{event.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{event.date}</p>
              <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                <Users className="w-4 h-4" />
                {event.participants} participants
              </div>
              <p className="text-sm text-primary mt-2 font-medium">{event.location}</p>
            </div>
          ))}
        </div>
        <div className="space-y-3 mt-6">
          <Button variant="outline" className="w-full">
            Voir tous les événements
          </Button>
          <Button size="sm" className="w-full flex items-center justify-center gap-2">
            <CalendarPlus className="w-4 h-4" />
            Créer un événement
          </Button>
        </div>
      </div>

      <DynamicAdBanner />
      <PopularPosts />
    </div>
  );
};